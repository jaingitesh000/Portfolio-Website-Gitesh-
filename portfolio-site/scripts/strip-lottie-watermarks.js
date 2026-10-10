const fs = require('fs');
const path = require('path');

const targets = process.argv.slice(2);
const files = targets.length
  ? targets
  : fs.readdirSync(path.join(__dirname, '..', 'assets', 'quest'))
      .filter(name => name.endsWith('.js') || name.endsWith('.json'))
      .map(name => path.join(__dirname, '..', 'assets', 'quest', name));

const watermarkPattern = /jitter(?:\.|\s*)video/i;

function containsWatermark(value) {
  if (typeof value === 'string') return watermarkPattern.test(value);
  if (Array.isArray(value)) return value.some(containsWatermark);
  if (value && typeof value === 'object') return Object.values(value).some(containsWatermark);
  return false;
}

function cleanAnimation(animation) {
  const removedAssetIds = new Set();
  let removedAssets = 0;
  let removedLayers = 0;
  let removedMetadata = 0;

  function cleanNode(node) {
    if (!node || typeof node !== 'object') return;

    if (node.meta && typeof node.meta === 'object' && containsWatermark(node.meta.g || '')) {
      delete node.meta.g;
      removedMetadata += 1;
    }

    if (Array.isArray(node.assets)) {
      node.assets = node.assets.filter(asset => {
        const isWatermark = containsWatermark(asset);
        if (isWatermark) {
          if (asset.id !== undefined) removedAssetIds.add(String(asset.id));
          removedAssets += 1;
        }
        return !isWatermark;
      });
      node.assets.forEach(cleanNode);
    }

    if (Array.isArray(node.layers)) {
      node.layers = node.layers.filter(layer => {
        const referencesRemovedAsset = layer.refId !== undefined && removedAssetIds.has(String(layer.refId));
        const isWatermark = referencesRemovedAsset || containsWatermark(layer.nm || '') || containsWatermark(layer.t || null);
        if (isWatermark) removedLayers += 1;
        return !isWatermark;
      });
      node.layers.forEach(cleanNode);
    }

    Object.entries(node).forEach(([key, value]) => {
      if (key !== 'assets' && key !== 'layers') cleanNode(value);
    });
  }

  cleanNode(animation);
  return { removedAssets, removedLayers, removedMetadata };
}

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const wrapper = source.match(/^\s*(window\.[A-Za-z0-9_$]+\s*=\s*)([\s\S]*);\s*$/);
  const jsonText = wrapper ? wrapper[2] : source;
  const animation = JSON.parse(jsonText);
  const result = cleanAnimation(animation);

  if (result.removedAssets || result.removedLayers || result.removedMetadata) {
    const cleanedJson = JSON.stringify(animation);
    fs.writeFileSync(file, wrapper ? `${wrapper[1]}${cleanedJson};` : cleanedJson);
  }

  console.log(`${path.basename(file)}: removed ${result.removedLayers} layer(s), ${result.removedAssets} asset(s), ${result.removedMetadata} metadata marker(s)`);
}
