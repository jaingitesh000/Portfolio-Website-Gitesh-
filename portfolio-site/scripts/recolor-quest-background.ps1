$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies 'System.Drawing.dll' -TypeDefinition @'
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;

public static class QuestCanvasRecolor {
  public static void Process(string path) {
    string temporaryPath = path + ".tmp.png";
    using (var source = new Bitmap(path)) {
      var bitmap = new Bitmap(source.Width, source.Height, PixelFormat.Format32bppArgb);
      using (var graphics = Graphics.FromImage(bitmap)) graphics.DrawImageUnscaled(source, 0, 0);
      var rect = new Rectangle(0, 0, bitmap.Width, bitmap.Height);
      var data = bitmap.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
      int stride = data.Stride;
      byte[] pixels = new byte[stride * bitmap.Height];
      Marshal.Copy(data.Scan0, pixels, 0, pixels.Length);
      bool[] visited = new bool[bitmap.Width * bitmap.Height];
      var queue = new Queue<int>();

      Action<int, int> seed = (x, y) => {
        if (x < 0 || y < 0 || x >= bitmap.Width || y >= bitmap.Height) return;
        int index = y * bitmap.Width + x;
        if (!visited[index] && IsCanvas(pixels, stride, x, y)) { visited[index] = true; queue.Enqueue(index); }
      };

      for (int x = 0; x < bitmap.Width; x++) { seed(x, 0); seed(x, bitmap.Height - 1); }
      for (int y = 0; y < bitmap.Height; y++) { seed(0, y); seed(bitmap.Width - 1, y); }

      // Seed the enclosed Before/After and Student Reports label surfaces.
      double[] xs = { 0.30, 0.34, 0.42, 0.46, 0.54, 0.58, 0.62, 0.66 };
      double[] ys = { 0.085, 0.10, 0.12 };
      foreach (double px in xs) foreach (double py in ys) seed((int)(bitmap.Width * px), (int)(bitmap.Height * py));

      int[] dx = { 1, -1, 0, 0 };
      int[] dy = { 0, 0, 1, -1 };
      while (queue.Count > 0) {
        int index = queue.Dequeue();
        int x = index % bitmap.Width;
        int y = index / bitmap.Width;
        int offset = y * stride + x * 4;
        pixels[offset] = 0x12;
        pixels[offset + 1] = 0x12;
        pixels[offset + 2] = 0x12;
        pixels[offset + 3] = 0xFF;
        for (int direction = 0; direction < 4; direction++) {
          int nx = x + dx[direction], ny = y + dy[direction];
          if (nx < 0 || ny < 0 || nx >= bitmap.Width || ny >= bitmap.Height) continue;
          int next = ny * bitmap.Width + nx;
          if (!visited[next] && IsCanvas(pixels, stride, nx, ny)) { visited[next] = true; queue.Enqueue(next); }
        }
      }


      string fileName = Path.GetFileName(path);
      if (fileName == "decision-05-student-reports.png") {
        NormalizeLabel(pixels, stride, new Rectangle(636, 91, 263, 61));
      } else {
        NormalizeLabel(pixels, stride, new Rectangle(467, 96, 153, 60));
        NormalizeLabel(pixels, stride, new Rectangle(928, 96, 132, 60));
      }

      Marshal.Copy(pixels, 0, data.Scan0, pixels.Length);
      bitmap.UnlockBits(data);

      using (var graphics = Graphics.FromImage(bitmap)) {
        graphics.SmoothingMode = SmoothingMode.AntiAlias;
        using (var pen = new Pen(Color.FromArgb(74, 74, 74), 2f)) {
          if (fileName == "decision-05-student-reports.png") {
            DrawRoundedRectangle(graphics, pen, new Rectangle(636, 91, 263, 61), 14);
          } else {
            DrawRoundedRectangle(graphics, pen, new Rectangle(467, 96, 153, 60), 14);
            DrawRoundedRectangle(graphics, pen, new Rectangle(928, 96, 132, 60), 14);
          }
        }
      }
      bitmap.Save(temporaryPath, ImageFormat.Png);
      bitmap.Dispose();
    }
    File.Copy(temporaryPath, path, true);
    File.Delete(temporaryPath);
  }

  private static bool IsCanvas(byte[] pixels, int stride, int x, int y) {
    int offset = y * stride + x * 4;
    int b = pixels[offset], g = pixels[offset + 1], r = pixels[offset + 2];
    int max = Math.Max(r, Math.Max(g, b));
    int min = Math.Min(r, Math.Min(g, b));
    return min >= 188 && max - min <= 20;
  }

  private static void NormalizeLabel(byte[] pixels, int stride, Rectangle rectangle) {
    for (int y = rectangle.Top + 8; y < rectangle.Bottom - 8; y++) {
      for (int x = rectangle.Left + 8; x < rectangle.Right - 8; x++) {
        int offset = y * stride + x * 4;
        int b = pixels[offset], g = pixels[offset + 1], r = pixels[offset + 2];
        int max = Math.Max(r, Math.Max(g, b));
        int min = Math.Min(r, Math.Min(g, b));
        if (max - min <= 16 && max != 18 && max < 190) {
          pixels[offset] = 0xFF;
          pixels[offset + 1] = 0xFF;
          pixels[offset + 2] = 0xFF;
        }
      }
    }
  }

  private static void DrawRoundedRectangle(Graphics graphics, Pen pen, Rectangle rectangle, int radius) {
    int diameter = radius * 2;
    using (var path = new GraphicsPath()) {
      path.AddArc(rectangle.Left, rectangle.Top, diameter, diameter, 180, 90);
      path.AddArc(rectangle.Right - diameter, rectangle.Top, diameter, diameter, 270, 90);
      path.AddArc(rectangle.Right - diameter, rectangle.Bottom - diameter, diameter, diameter, 0, 90);
      path.AddArc(rectangle.Left, rectangle.Bottom - diameter, diameter, diameter, 90, 90);
      path.CloseFigure();
      graphics.DrawPath(pen, path);
    }
  }
}
'@

$assets = @(
  'decision-01-learning-entry.png',
  'decision-02-guided-learning.png',
  'decision-03-progress-guidance.png',
  'decision-04-assessment-feedback.png',
  'decision-05-student-reports.png'
)

foreach ($asset in $assets) {
  $path = Join-Path $PSScriptRoot "..\assets\quest\$asset"
  [QuestCanvasRecolor]::Process((Resolve-Path $path).Path)
  Write-Output "Updated $asset"
}
