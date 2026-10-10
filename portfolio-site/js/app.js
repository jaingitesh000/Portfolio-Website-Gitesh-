  // ---------- Shared page router ----------
  const initialProjectSlug = document.body.dataset.projectSlug;
  if (initialProjectSlug && !window.location.hash) {
    window.history.replaceState(null, '', `${window.location.pathname}#/case/${initialProjectSlug}`);
  }
  const views = {
    home: document.getElementById('view-home'),
    quest: document.getElementById('view-quest'),
    project: document.getElementById('view-project')
  };

  const projectCases = {
    'teacher-tools': {
      index: '02',
      eyebrow: 'Teacher Tools · Operations',
      title: 'Teach Portal & Mobile App — Classroom Management Experience',
      summary: 'Redesigned the Teach Portal and Mobile App to streamline classroom management, simplify assessment workflows, and improve communication between teachers and students.',
      hero: 'assets/teach-classroom-management.png',
      secondary: 'assets/artifacts/artifact-quest-04.png',
      tags: ['Product Design', 'UX Strategy', 'Teacher Tools', 'Workflow Design', 'Web & Mobile'],
      product: 'Teach Portal & Mobile App',
      role: 'Product Designer',
      problem: 'Teachers were managing assessments, homework, student progress, and communication through fragmented workflows. Repeated actions and unclear hierarchy slowed down routine classroom work.',
      goal: 'Create one coherent teaching workspace that makes frequent tasks faster, clarifies student status, and works consistently across desktop and mobile.',
      impact: ['Faster assessment creation', 'Clearer student-performance insights', 'More consistent web and mobile workflows'],
      overview: [
        'Quest+ Teach is a teacher-first platform built to simplify classroom management, lesson planning, assessments, and student performance tracking across partnered schools. While the platform offered powerful academic capabilities, everyday teaching workflows were fragmented, time-consuming, and difficult to navigate.',
        'The goal of this redesign was not just to refresh the interface, but to streamline complex teacher workflows, reduce operational effort, and create a faster, more intuitive experience for managing classrooms, assignments, assessments, and student insights.'
      ],
      problemBullets: [
        'The existing QPG workflow was time-consuming, difficult to understand, and required multiple manual steps.',
        'Most question papers and blueprints were created by the internal academic team through the admin portal.',
        'Manual paper creation was already a tedious task for teachers, making it difficult to adopt another complex workflow.',
        'There was an opportunity to simplify the experience and make teachers self-sufficient.'
      ],
      problemClosing: 'As a result, users were visiting the platform but not engaging with it meaningfully over time.',
      goalCopy: 'The primary objective was to redesign the existing Question Paper Generator into a teacher-centric platform that simplifies complex workflows and reduces administrative effort.',
      goalFocus: [
        'Enable teachers to generate board-compliant question papers in 2–3 simple steps.',
        'Increase adoption of the Question Paper Generator by improving usability.',
        'Unify assessments, classroom management, reports, and content into a single experience.',
        'Reduce dependency on the internal academic team for creating papers and blueprints.',
        'Build a scalable platform that supports teachers throughout their daily teaching journey.'
      ],
      impactStats: [
        ['Network', '80+', 'Partner Schools'],
        ['Live', '30+', 'Schools Live'],
        ['Volume', '50K+', 'Assessments Generated']
      ],
      decisionImages: [
        'assets/quest/teach-decision-01-daily-tasks.svg',
        'assets/quest/teach-decision-02-assessment-workflows.svg',
        'assets/quest/teach-decision-03-administrative-effort.svg',
        'assets/quest/teach-decision-04-classroom-communication.svg'
      ],
      decisions: [
        ['Shifted From Features to Daily Teaching Tasks', 'The original experience offered teachers multiple capabilities, but the most common tasks were not always easy to discover or complete. I reorganized the experience around how teachers naturally plan lessons, create assessments, and review student performance, prioritizing the workflows they used most often.', 'The product became more approachable and task-focused, encouraging teachers to complete everyday activities independently instead of relying on the internal academic team.'],
        ['Simplified Assessment Workflows', 'Creating question papers involved multiple steps and disconnected actions, making the process time-consuming for teachers. I restructured the workflow by reducing unnecessary steps, improving information hierarchy, and making paper creation more intuitive from start to finish.', 'Teachers could create and assign board-compliant question papers in just a few steps, making assessment creation faster and easier to adopt.'],
        ['Connected the Academic Workflow', 'Teachers were spending considerable time creating assessments manually and switching between different parts of the platform to complete related tasks. I connected assessment creation, assignment, review, and tracking into a more continuous workflow instead of treating them as separate activities.', 'Everyday academic tasks became more structured and efficient, reducing the effort required to manage assessments across the platform.'],
        ['Moved From One-Way Content to Classroom Communication', 'The original platform was primarily built for generating and downloading question papers, so there was no direct way for students or parents to reach the teacher with questions or doubts. As the platform evolved into a broader learning ecosystem, I introduced a dedicated communication layer that connected students and parents directly with the relevant teacher around specific academic queries.', 'The experience became more collaborative rather than one-directional, giving students and parents a clearer way to raise questions while helping teachers manage and respond to academic communication within the same ecosystem.']
      ],
      nextLabel: 'Group Masterclass (Fluent Life)',
      nextRoute: '#/case/fluent-life'
    },
    'fluent-life': {
      index: '03',
      eyebrow: 'Community · Live Cohorts',
      title: 'Group Masterclass (Fluent Life) — Learning Community Experience',
      summary: 'Designed the Group Masterclass experience for Fluent Life to create a more interactive, structured, and engaging learning environment for users participating in cohort-based programs. The platform focused on improving learner participation, community interaction, session accessibility, and overall learning consistency across the masterclass journey.',
      hero: 'assets/fluent-life-masterclass.jpg',
      secondary: 'assets/fluent-life-masterclass.jpg',
      tags: ['Product Design', 'Community Learning', 'Engagement Systems', 'B2C'],
      product: 'Fluent Life',
      role: 'Product Designer · End-to-end feature building',
      company: 'Ufaber Edutech Pvt Ltd',
      overview: [
        'Group Masterclass was designed as a community-driven learning experience where users could join structured programs, access learning sessions, participate in discussions, and stay accountable throughout their learning journey.',
        'The challenge was not only delivering educational content but also maintaining long-term engagement, reducing drop-offs, and creating a stronger sense of community participation.',
        'The redesign focused on simplifying the learning flow, improving session discoverability, and building stronger engagement loops that encouraged users to return consistently.'
      ],
      problemBullets: [
        'Users struggled to maintain consistency throughout the program',
        'Session discovery and access lacked clarity',
        'Community interactions felt disconnected from the learning journey',
        'Learners often lost track of progress and upcoming activities',
        'Motivation dropped after initial onboarding',
        'Participation rates decreased across longer learning programs'
      ],
      problemClosing: 'As a result, users joined programs but engagement gradually reduced over time.',
      goalCopy: 'The primary objective was to increase learning consistency and improve community-driven engagement.',
      goalFocus: [
        'Improve session discoverability',
        'Create stronger accountability loops',
        'Increase community participation',
        'Simplify learner journeys',
        'Improve progress visibility',
        'Encourage repeat engagement across the program lifecycle'
      ],
      impactStats: [
        ['↑', '2x', 'Active user engagement'],
        ['↑', '54%', 'Community Participation']
      ],
      impact: ['Active user engagement', 'Community Participation'],
      fullCaseUrl: 'https://www.behance.net/gallery/185208551/Group-Masterclass-(Fluent-Life)',
      decisions: [
        ['Structured Learning Journey', 'Users often felt uncertain about where they were in the program and what actions to take next. I redesigned the experience to create a clearer learning path with better hierarchy, progress visibility, and session organization.', 'Learners could understand their journey more easily and continue progressing without confusion.', []],
        ['Improved Session Accessibility', 'Masterclass sessions were redesigned to become easier to discover, access, and revisit.', 'Users were able to engage with sessions more consistently throughout the program.', ['Clearer session hierarchy', 'Reduced navigation depth', 'Simplified content access', 'Improved learning continuity']],
        ['Community-Centric Engagement', 'One of the major opportunities was strengthening peer-to-peer interaction. The redesigned experience introduced stronger visibility for:', 'Users felt more connected to the learning ecosystem rather than consuming content in isolation.', ['Discussions', 'Community participation', 'Cohort engagement', 'Collaborative learning touchpoints']],
        ['Progress & Accountability Systems', 'Learning programs often suffer from completion drop-offs. To address this, the experience focused on:', 'The platform created stronger accountability and improved learning consistency.', ['Progress visibility', 'Milestone tracking', 'Activity reminders', 'Participation feedback loops']],
        ['Mobile-First Learning Experience', 'Since users frequently accessed programs on mobile devices, the experience was optimized around mobile-first behaviors. The redesign emphasized:', 'Improved accessibility and engagement across daily learning sessions.', ['Faster content access', 'Simplified navigation', 'Reduced cognitive load', 'Uninterrupted learning flows']]
      ],
      nextLabel: 'Quest+ Learning Experience Redesign',
      nextRoute: '#/case/quest-plus'
    }
  };

  const caseCardData = {
    'quest-plus': {
      index: '01',
      nav: 'quest',
      route: '#/case/quest-plus',
      category: 'EdTech • Gamification',
      title: 'Quest+ Learning Experience Redesign',
      description: 'Revamped the Quest+ learning platform to improve student engagement, simplify navigation, and create a clearer learning experience. The redesign focused on usability, progress tracking, and assessment feedback, leading to higher engagement and a stronger foundation for future gamification features.',
      animation: 'quest'
    },
    'teacher-tools': {
      index: '02',
      nav: 'teach',
      route: '#/case/teacher-tools',
      category: 'Teacher Tools • Operations',
      title: 'Teach Portal & Mobile App — Classroom Management Experience',
      description: 'Redesigned the Teach Portal and Mobile App to streamline classroom management, simplify assessment workflows, and improve communication between teachers and students. The platform focused on reducing operational friction for educators while creating a more structured and accessible learning experience across web and mobile devices.',
      animation: 'teach'
    },
    'fluent-life': {
      index: '03',
      nav: 'fluent',
      route: '#/case/fluent-life',
      category: 'Community • Live Cohorts',
      title: 'Group Masterclass (Fluent Life) — Learning Community Experience',
      description: 'Designed the Group Masterclass experience for Fluent Life to create a more interactive, structured, and engaging learning environment for users participating in cohort-based programs. The platform focused on improving learner participation, community interaction, session accessibility, and overall learning consistency across the masterclass journey.',
      image: 'assets/fluent-life-masterclass.jpg'
    }
  };

  function mountCaseCardAnimation(container, animationData, label) {
    if (!container || !window.lottie || !animationData || container.dataset.lottieMounted) return;
    container.dataset.lottieMounted = 'true';
    container.style.backgroundImage = 'none';
    container.setAttribute('aria-label', label);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animation = window.lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: !reduceMotion,
      autoplay: !reduceMotion,
      animationData,
      rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
    });
    if (reduceMotion) animation.goToAndStop(0, true);
  }

  function configureNextCaseCard(root, nextSlug) {
    const next = caseCardData[nextSlug];
    const card = root.querySelector('.next-case-card');
    if (!next || !card) return;

    card.href = next.route;
    card.dataset.nav = next.nav;
    card.querySelector('.next-case-index').textContent = `Case Study // ${next.index}`;
    card.querySelector('.next-case-category').textContent = next.category;
    card.querySelector('.next-case-title').textContent = next.title;
    card.querySelector('.next-case-description').textContent = next.description;

    const media = card.querySelector('.next-case-media');
    if (next.animation) {
      const animationId = `next-${nextSlug}-animation`;
      const fallbackClass = next.animation === 'teach' ? 'teach-thumbnail-animation' : 'quest-thumbnail-animation';
      media.innerHTML = `<div id="${animationId}" class="${fallbackClass} w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" role="img"></div>`;
      const animationData = next.animation === 'teach' ? window.TEACH_THUMBNAIL_ANIMATION : window.QUEST_THUMBNAIL_ANIMATION;
      requestAnimationFrame(() => mountCaseCardAnimation(document.getElementById(animationId), animationData, `Animated ${next.title} preview`));
    } else {
      media.innerHTML = `<img class="work-preview-image w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="${next.image}" alt="${next.title} preview">`;
    }
  }

  function renderExactProjectCase(slug) {
    const item = projectCases[slug];
    if (!item) return;

    views.project.replaceChildren(...Array.from(views.quest.childNodes, node => node.cloneNode(true)));
    const root = views.project;

    root.querySelector('.case-study-action--primary')?.removeAttribute('data-full-case-url');

    root.querySelectorAll('[id]').forEach(element => {
      if (element.id.startsWith('quest-')) element.id = element.id.replace('quest-', 'project-');
    });
    root.querySelectorAll('a[href^="#quest-"]').forEach(link => {
      link.setAttribute('href', link.getAttribute('href').replace('#quest-', '#project-'));
    });

    const hero = root.querySelector('.space-y-6.pb-16');
    hero.querySelector('h1').textContent = item.title;
    hero.querySelector(':scope > p').textContent = item.summary;
    hero.querySelector('.flex.flex-wrap.gap-2').innerHTML = item.tags.map(tag => `<span class="px-3 py-1.5 bg-black/[0.04] text-[#686866] font-mono text-[11px] rounded-full">${tag}</span>`).join('');

    const showcaseGrid = hero.querySelector('.quest-showcase-grid');
    if (slug === 'teacher-tools' && showcaseGrid) {
      showcaseGrid.className = 'quest-showcase-grid mt-8';
      showcaseGrid.innerHTML = `
        <figure class="teacher-case-cover rounded-[28px] overflow-hidden bg-[#1E1E1E] border border-black/[0.04]">
          <div id="teacher-case-cover-animation" class="quest-animation teacher-case-cover-animation" role="img" aria-label="Animated Teach Portal and Mobile App combined interface showcase"></div>
        </figure>`;

      const mountTeacherCaseCover = () => {
        const container = document.getElementById('teacher-case-cover-animation');
        if (!container || !window.lottie || !window.TEACH_CASE_COVER_ANIMATION || container.dataset.lottieMounted) return;
        container.dataset.lottieMounted = 'true';
        container.style.backgroundImage = 'none';
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const animation = window.lottie.loadAnimation({
          container,
          renderer: 'svg',
          loop: !reduceMotion,
          autoplay: !reduceMotion,
          animationData: window.TEACH_CASE_COVER_ANIMATION,
          rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        });
        if (reduceMotion) animation.goToAndStop(0, true);
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountTeacherCaseCover, { once: true });
      } else {
        requestAnimationFrame(mountTeacherCaseCover);
      }
    } else if (slug === 'fluent-life' && showcaseGrid) {
      showcaseGrid.className = 'quest-showcase-grid mt-8';
      showcaseGrid.innerHTML = `
        <figure class="w-full rounded-[28px] overflow-hidden bg-[#1E1E1E]">
          <img class="block w-full h-auto object-contain object-center" src="${item.hero}" alt="Group Masterclass learning community experience" loading="eager" decoding="async">
        </figure>`;
    } else {
      const showcaseFrames = hero.querySelectorAll('.quest-animation');
      showcaseFrames.forEach((frame, index) => {
        frame.removeAttribute('id');
        frame.className = 'quest-animation fluent-case-showcase';
        frame.setAttribute('aria-label', `${item.title} ${index ? 'mobile' : 'desktop'} interface showcase`);
      });
    }

    const metaLabels = root.querySelectorAll('.case-contents-sidebar .p-5 > div > span:first-child');
    metaLabels.forEach(label => {
      const value = label.nextElementSibling;
      if (!value) return;
      if (label.textContent.trim() === 'Product') value.textContent = item.product;
      if (label.textContent.trim() === 'Role') value.textContent = item.role;
    });

    if (slug === 'fluent-life') {
      const metaCard = root.querySelector('.case-contents-sidebar .p-5');
      if (metaCard) {
        metaCard.innerHTML = `
          <div>
            <span class="font-mono text-[10px] uppercase text-[#8E8E8A] block">Product</span>
            <span class="font-display text-[15px] text-[#111111] font-semibold">${item.product}</span>
          </div>
          <div>
            <span class="font-mono text-[10px] uppercase text-[#8E8E8A] block">Role &amp; Scope</span>
            <span class="text-[15px] text-[#111111] font-semibold">${item.role}</span>
          </div>
          <div>
            <span class="font-mono text-[10px] uppercase text-[#8E8E8A] block">Company</span>
            <span class="text-[15px] text-[#111111] font-semibold">${item.company}</span>
          </div>`;
      }
    }

    const overview = root.querySelector('#project-overview');
    const overviewParagraph = overview?.querySelector('p');
    if (overviewParagraph) overviewParagraph.textContent = item.summary;

    const problem = root.querySelector('#project-problem');
    problem?.querySelectorAll('p').forEach(paragraph => { paragraph.textContent = item.problem; });

    const goal = root.querySelector('#project-goal');
    goal?.querySelectorAll('p').forEach(paragraph => { paragraph.textContent = item.goal; });

    const impact = root.querySelector('#project-impact');
    const impactValues = impact?.querySelectorAll('.font-display.text-3xl') || [];
    impactValues.forEach((value, index) => { value.textContent = item.impact[index % item.impact.length]; });

    const decisionsSection = root.querySelector('#project-decisions');
    const decisionBlocks = decisionsSection?.querySelectorAll(':scope > div.space-y-4') || [];
    decisionBlocks.forEach((block, index) => {
      const decision = item.decisions[index];
      if (!decision) {
        block.remove();
        return;
      }
      const heading = block.querySelector('h3');
      const paragraph = block.querySelector('p');
      if (heading) heading.textContent = `${index + 1}. ${decision[0]}`;
      if (paragraph) paragraph.textContent = decision[1];
      block.querySelectorAll('li span:last-child').forEach((entry, entryIndex) => {
        entry.textContent = item.impact[(index + entryIndex) % item.impact.length];
      });
      block.querySelectorAll('img').forEach(image => {
        image.src = index % 2 ? item.secondary : item.hero;
        image.alt = `${decision[0]} interface comparison`;
      });
    });

    if (slug === 'teacher-tools') {
      const overviewCopy = root.querySelector('#project-overview > div');
      if (overviewCopy) overviewCopy.innerHTML = item.overview.map(paragraph => `<p>${paragraph}</p>`).join('');

      if (problem) {
        const intro = problem.querySelector(':scope > p');
        if (intro) intro.textContent = 'The platform had the following challenges:';
        const bulletList = problem.querySelector(':scope > .space-y-2');
        if (bulletList) {
          bulletList.innerHTML = item.problemBullets.map(bullet => `
            <div class="p-4 rounded-xl bg-[#F3F2ED] flex items-start gap-3">
              <span class="w-2 h-2 rounded-full bg-[#E63C1E] mt-2 shrink-0"></span>
              <span class="text-[15px] text-[#111111]">${bullet}</span>
            </div>`).join('');
        }
        const closing = problem.querySelector(':scope > .border-l-4');
        if (closing) closing.textContent = item.problemClosing;
      }

      if (goal) {
        const goalParagraph = goal.querySelector(':scope > p');
        if (goalParagraph) goalParagraph.textContent = item.goalCopy;
        const focus = goal.querySelector(':scope > .space-y-2');
        const focusLabel = focus?.querySelector(':scope > span');
        if (focusLabel) focusLabel.textContent = 'The platform was designed to:';
        const focusGrid = focus?.querySelector(':scope > .grid');
        if (focusGrid) {
          focusGrid.innerHTML = item.goalFocus.map((entry, index) => `<div class="p-4 rounded-xl bg-[#F3F2ED] text-[15px] text-[#111111]${index === item.goalFocus.length - 1 ? ' md:col-span-2' : ''}">${entry}</div>`).join('');
        }
      }

      const impactGrid = impact?.querySelector(':scope > .grid');
      if (impactGrid) {
        impactGrid.className = 'grid grid-cols-1 sm:grid-cols-3 gap-3';
        impactGrid.innerHTML = item.impactStats.map(stat => `
          <div class="p-5 rounded-2xl bg-white border border-[#E5E5DF]">
            <span class="font-mono text-[10px] uppercase text-[#8E8E8A]">${stat[0]}</span>
            <div class="font-display text-3xl font-bold text-[#111111] mt-1">${stat[1]}</div>
            <span class="font-mono text-[10px] uppercase text-[#686866] tracking-wide">${stat[2]}</span>
          </div>`).join('');
      }

      const currentDecisionBlocks = decisionsSection?.querySelectorAll(':scope > div.space-y-4') || [];
      currentDecisionBlocks.forEach((block, index) => {
        const decision = item.decisions[index];
        if (!decision) return block.remove();
        const heading = block.querySelector('h3');
        const body = block.querySelector(':scope > p');
        const result = block.querySelector(':scope > .border-l-4 p');
        if (heading) heading.textContent = `${index + 1}. ${decision[0]}`;
        if (body) body.textContent = decision[1];
        if (result) result.textContent = decision[2];
        block.querySelectorAll(':scope > ul').forEach(list => list.remove());
        const decisionImage = block.querySelector('figure img');
        if (decisionImage && item.decisionImages[index]) {
          decisionImage.src = item.decisionImages[index];
          decisionImage.alt = `${decision[0]} interface showcase`;
        }
      });

      const fullCaseButton = root.querySelector('.case-study-action--primary');
      if (fullCaseButton) {
        fullCaseButton.classList.add('case-study-action--tooltip');
        fullCaseButton.setAttribute('aria-describedby', 'teacher-case-tooltip');
        fullCaseButton.insertAdjacentHTML('beforeend', `
          <span class="about-tooltip" id="teacher-case-tooltip" role="tooltip">
            <strong>Coming Soon</strong>
            <i class="about-tooltip-line about-tooltip-line--green"></i>
            <i class="about-tooltip-line about-tooltip-line--blue"></i>
          </span>`);
      }
    }

    if (slug === 'fluent-life') {
      const overviewCopy = root.querySelector('#project-overview > div');
      if (overviewCopy) overviewCopy.innerHTML = item.overview.map(paragraph => `<p>${paragraph}</p>`).join('');

      if (problem) {
        const intro = problem.querySelector(':scope > p');
        if (intro) intro.textContent = 'The learning experience faced multiple engagement challenges:';
        const bulletList = problem.querySelector(':scope > .space-y-2');
        if (bulletList) {
          bulletList.innerHTML = item.problemBullets.map(bullet => `
            <div class="p-4 rounded-xl bg-[#F3F2ED] flex items-start gap-3">
              <span class="w-2 h-2 rounded-full bg-[#E63C1E] mt-2 shrink-0"></span>
              <span class="text-[15px] text-[#111111]">${bullet}</span>
            </div>`).join('');
        }
        const closing = problem.querySelector(':scope > .border-l-4');
        if (closing) closing.textContent = item.problemClosing;
      }

      if (goal) {
        const goalParagraph = goal.querySelector(':scope > p');
        if (goalParagraph) goalParagraph.textContent = item.goalCopy;
        const focusGrid = goal.querySelector(':scope > .space-y-2 > .grid');
        if (focusGrid) {
          focusGrid.innerHTML = item.goalFocus.map(entry => `<div class="p-4 rounded-xl bg-[#F3F2ED] text-[15px] text-[#111111]">${entry}</div>`).join('');
        }
      }

      const impactGrid = impact?.querySelector(':scope > .grid');
      if (impactGrid) {
        impactGrid.className = 'grid grid-cols-1 sm:grid-cols-2 gap-3';
        impactGrid.innerHTML = item.impactStats.map(stat => `
          <div class="p-5 rounded-2xl bg-white border border-[#E5E5DF]">
            <span class="font-mono text-[10px] uppercase text-[#8E8E8A]">${stat[0]} Growth</span>
            <div class="font-display text-3xl font-bold text-[#E63C1E] mt-1">${stat[1]}</div>
            <span class="font-mono text-[10px] uppercase text-[#686866] tracking-wide">${stat[2]}</span>
          </div>`).join('');
      }

      const fluentDecisionBlocks = decisionsSection?.querySelectorAll(':scope > div.space-y-4') || [];
      fluentDecisionBlocks.forEach((block, index) => {
        const decision = item.decisions[index];
        if (!decision) return block.remove();
        const heading = block.querySelector('h3');
        const body = block.querySelector(':scope > p');
        const result = block.querySelector(':scope > .border-l-4 p');
        if (heading) heading.textContent = `${index + 1}. ${decision[0]}`;
        if (body) body.textContent = decision[1];
        if (result) result.textContent = decision[2];

        block.querySelector('figure')?.remove();

        block.querySelectorAll(':scope > ul').forEach(list => list.remove());
        if (decision[3].length) {
          const list = document.createElement('ul');
          list.className = 'space-y-2 text-[15px] text-[#111111]';
          list.innerHTML = decision[3].map(entry => `<li class="flex items-start gap-2"><span class="text-[#E63C1E] mt-0.5">•</span><span>${entry}</span></li>`).join('');
          const resultCallout = block.querySelector(':scope > .border-l-4');
          if (resultCallout) block.insertBefore(list, resultCallout);
        }
      });

      const fullCaseButton = root.querySelector('.case-study-action--primary');
      if (fullCaseButton) {
        fullCaseButton.dataset.fullCaseUrl = item.fullCaseUrl;
        fullCaseButton.classList.remove('case-study-action--tooltip');
        fullCaseButton.removeAttribute('aria-describedby');
        fullCaseButton.querySelector('.about-tooltip')?.remove();
      }
    }

    configureNextCaseCard(root, item.nextRoute.split('/').pop());
  }

  function showView(name) {
    Object.keys(views).forEach(key => {
      views[key]?.classList.toggle('is-hidden', key !== name);
    });
    const isCaseView = name === 'quest' || name === 'project';
    document.body.classList.toggle('case-view-active', isCaseView);
    document.querySelector('.site-header')?.classList.remove('is-hidden-on-scroll');
    document.getElementById('case-back-nav')?.classList.remove('is-hidden-on-scroll');
  }

  function scrollToId(id) {
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function route(replace) {
    const hash = window.location.hash || '#/home';
    const parts = hash.replace('#/', '').split('/'); // e.g. ['home','work'] or ['case','quest-plus']

    if (parts[0] === 'case' && parts[1] === 'quest-plus') {
      if (!views.quest) {
        window.location.replace('projects/quest-plus.html#/case/quest-plus');
        return;
      }
      configureNextCaseCard(views.quest, 'teacher-tools');
      showView('quest');
      window.scrollTo({ top: 0 });
    } else if (parts[0] === 'case' && projectCases[parts[1]]) {
      if (!views.project) {
        const page = parts[1] === 'teacher-tools' ? 'teacher-tools.html' : 'group-masterclass.html';
        window.location.replace(`projects/${page}#/case/${parts[1]}`);
        return;
      }
      renderExactProjectCase(parts[1]);
      showView('project');
      window.scrollTo({ top: 0 });
    } else {
      showView('home');
      if (parts[1]) {
        scrollToId(parts[1]);
      } else if (!replace) {
        window.scrollTo({ top: 0 });
      }
    }
  }

  // Intercept clicks on any link carrying data-nav, so we control the transition
  document.addEventListener('click', (e) => {
    const fullCaseButton = e.target.closest('.case-study-action--primary');
    if (fullCaseButton) {
      const fullCaseUrl = fullCaseButton.dataset.fullCaseUrl;
      if (fullCaseUrl) window.open(fullCaseUrl, '_blank', 'noopener,noreferrer');
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const link = e.target.closest('a[data-nav]');
    if (!link) return;
    e.preventDefault();
    const targetView = link.getAttribute('data-nav');
    const scrollTarget = link.getAttribute('data-scroll');
    const caseRoutes = { quest: '#/case/quest-plus', teach: '#/case/teacher-tools', fluent: '#/case/fluent-life' };
    const newHash = caseRoutes[targetView] || (scrollTarget ? `#/home/${scrollTarget}` : '#/home');
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    } else {
      route();
    }
  });

  window.addEventListener('hashchange', () => route());
  route(true);

  const caseBackNav = document.getElementById('case-back-nav');
  const siteHeader = document.querySelector('.site-header');
  let previousNavScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const shouldHide = currentScrollY > 60 && currentScrollY > previousNavScrollY;
    siteHeader?.classList.toggle('is-hidden-on-scroll', shouldHide);
    caseBackNav?.classList.toggle('is-hidden-on-scroll', shouldHide);
    previousNavScrollY = currentScrollY;
  }, { passive: true });

  // ---------- Scroll-spy for the Quest+ case study side nav ----------
  document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-ripple-section');
    const heroGrid = document.getElementById('hero-ripple-grid');
    const reduceBackgroundMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (heroSection && heroGrid) {
      let columns = 0;
      let rows = 0;
      let cellSize = 56;
      let hoveredCell = null;
      let resizeFrame;

      const buildHeroGrid = () => {
        cellSize = parseFloat(getComputedStyle(heroGrid).getPropertyValue('--hero-cell-size')) || 56;
        const bounds = heroGrid.getBoundingClientRect();
        columns = Math.ceil(bounds.width / cellSize) + 2;
        rows = Math.ceil(bounds.height / cellSize) + 2;
        heroGrid.style.setProperty('--hero-grid-columns', columns);
        heroGrid.style.setProperty('--hero-grid-rows', rows);

        const fragment = document.createDocumentFragment();
        for (let row = 0; row < rows; row += 1) {
          for (let column = 0; column < columns; column += 1) {
            const cell = document.createElement('div');
            cell.className = 'hero-ripple-cell';
            cell.dataset.column = column;
            cell.dataset.row = row;
            fragment.appendChild(cell);
          }
        }
        heroGrid.replaceChildren(fragment);
        hoveredCell = null;
      };

      const cellFromPointer = event => {
        const bounds = heroGrid.getBoundingClientRect();
        const offsetX = (bounds.width - columns * cellSize) / 2;
        const offsetY = (bounds.height - rows * cellSize) / 2;
        const column = Math.floor((event.clientX - bounds.left - offsetX) / cellSize);
        const row = Math.floor((event.clientY - bounds.top - offsetY) / cellSize);
        if (column < 0 || row < 0 || column >= columns || row >= rows) return null;
        return { column, row, index: row * columns + column };
      };

      const updateHoveredCell = event => {
        const point = cellFromPointer(event);
        if (!point || point.index === hoveredCell) return;
        if (hoveredCell !== null) heroGrid.children[hoveredCell]?.classList.remove('is-hovered');
        heroGrid.children[point.index]?.classList.add('is-hovered');
        hoveredCell = point.index;
      };

      const triggerHeroRipple = event => {
        if (reduceBackgroundMotion) return;
        const origin = cellFromPointer(event);
        if (!origin) return;

        Array.from(heroGrid.children).forEach(cell => {
          const distance = Math.hypot(Number(cell.dataset.column) - origin.column, Number(cell.dataset.row) - origin.row);
          cell.classList.remove('is-rippling');
          cell.style.setProperty('--ripple-delay', `${Math.round(distance * 55)}ms`);
          cell.style.setProperty('--ripple-duration', `${Math.round(200 + distance * 80)}ms`);
          void cell.offsetWidth;
          cell.classList.add('is-rippling');
          cell.addEventListener('animationend', () => cell.classList.remove('is-rippling'), { once: true });
        });
      };

      buildHeroGrid();
      heroSection.addEventListener('pointermove', updateHoveredCell);
      heroSection.addEventListener('pointerleave', () => {
        if (hoveredCell !== null) heroGrid.children[hoveredCell]?.classList.remove('is-hovered');
        hoveredCell = null;
      });
      heroSection.addEventListener('click', triggerHeroRipple);
      window.addEventListener('resize', () => {
        cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(buildHeroGrid);
      });
    }

    const homeNavLinks = document.querySelectorAll('.site-nav-link[data-scroll]');
    const setActiveHomeNav = targetId => {
      homeNavLinks.forEach(link => link.classList.toggle('is-active', link.dataset.scroll === targetId));
    };
    homeNavLinks.forEach(link => link.addEventListener('click', () => setActiveHomeNav(link.dataset.scroll)));
    const observedHomeSections = Array.from(homeNavLinks)
      .map(link => document.getElementById(link.dataset.scroll))
      .filter(Boolean);
    let scrollSpyFrame;
    const updateHomeScrollSpy = () => {
      scrollSpyFrame = null;
      if (views.home.classList.contains('is-hidden')) return setActiveHomeNav(null);
      const marker = window.innerHeight * 0.38;
      const activeSection = observedHomeSections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      });
      setActiveHomeNav(activeSection?.id || null);
    };
    window.addEventListener('scroll', () => {
      if (!scrollSpyFrame) scrollSpyFrame = requestAnimationFrame(updateHomeScrollSpy);
    }, { passive: true });
    window.addEventListener('resize', updateHomeScrollSpy);
    updateHomeScrollSpy();

    const allowCardMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.matchMedia('(pointer: fine)').matches;
    if (allowCardMotion) {
      document.querySelectorAll('.comet-card').forEach(card => {
        const current = { rotateX: 0, rotateY: 0, translateX: 0, translateY: 0, glareX: 50, glareY: 50 };
        const target = { ...current };
        let animationFrame;
        let isAnimating = false;

        const renderCardMotion = () => {
          const easing = 0.14;
          let movementRemaining = false;

          Object.keys(current).forEach(key => {
            current[key] += (target[key] - current[key]) * easing;
            if (Math.abs(target[key] - current[key]) > 0.02) movementRemaining = true;
          });

          card.style.setProperty('--comet-rotate-x', `${current.rotateX.toFixed(3)}deg`);
          card.style.setProperty('--comet-rotate-y', `${current.rotateY.toFixed(3)}deg`);
          card.style.setProperty('--comet-translate-x', `${current.translateX.toFixed(3)}px`);
          card.style.setProperty('--comet-translate-y', `${current.translateY.toFixed(3)}px`);
          card.style.setProperty('--comet-glare-x', `${current.glareX.toFixed(2)}%`);
          card.style.setProperty('--comet-glare-y', `${current.glareY.toFixed(2)}%`);

          if (movementRemaining) {
            animationFrame = requestAnimationFrame(renderCardMotion);
          } else {
            isAnimating = false;
          }
        };

        const startCardMotion = () => {
          if (isAnimating) return;
          isAnimating = true;
          animationFrame = requestAnimationFrame(renderCardMotion);
        };

        card.addEventListener('pointermove', event => {
          const bounds = card.getBoundingClientRect();
          const x = event.clientX - bounds.left;
          const y = event.clientY - bounds.top;
          const xPercent = x / bounds.width - 0.5;
          const yPercent = y / bounds.height - 0.5;

          target.rotateX = yPercent * -15;
          target.rotateY = xPercent * 15;
          target.translateX = xPercent * 24;
          target.translateY = yPercent * -24;
          target.glareX = (x / bounds.width) * 100;
          target.glareY = (y / bounds.height) * 100;
          startCardMotion();
        });

        card.addEventListener('pointerleave', () => {
          target.rotateX = 0;
          target.rotateY = 0;
          target.translateX = 0;
          target.translateY = 0;
          target.glareX = 50;
          target.glareY = 50;
          startCardMotion();
        });
      });
    }

    document.querySelectorAll('.about-icon-button').forEach(button => {
      const tooltip = button.querySelector('.about-tooltip');
      let animationFrame;

      button.addEventListener('pointermove', event => {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(() => {
          const bounds = button.getBoundingClientRect();
          const pointerOffset = event.clientX - bounds.left - bounds.width / 2;
          const normalizedOffset = Math.max(-1, Math.min(1, pointerOffset / (bounds.width / 2)));
          tooltip.style.setProperty('--tooltip-x', `${normalizedOffset * 22}px`);
          tooltip.style.setProperty('--tooltip-rotate', `${normalizedOffset * 12}deg`);
        });
      });

      button.addEventListener('pointerleave', () => {
        cancelAnimationFrame(animationFrame);
        tooltip.style.setProperty('--tooltip-x', '0px');
        tooltip.style.setProperty('--tooltip-rotate', '0deg');
      });
    });

    const copyEmailButton = document.getElementById('copy-email-btn');
    if (copyEmailButton) {
      copyEmailButton.addEventListener('click', async () => {
        const label = copyEmailButton.querySelector('.email-label');
        const icon = copyEmailButton.querySelector('.copy-icon');
        const originalLabel = label.textContent;

        await navigator.clipboard.writeText('hello@giteshjain.design');
        label.textContent = 'Copied to clipboard!';
        label.classList.add('text-emerald-600');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';

        setTimeout(() => {
          label.textContent = originalLabel;
          label.classList.remove('text-emerald-600');
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>';
        }, 1800);
      });
    }

    if (window.lottie) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const questAnimations = [
        ['quest-student-portal-animation', window.QUEST_STUDENT_PORTAL_ANIMATION],
        ['quest-mobile-screens-animation', window.QUEST_MOBILE_SCREENS_ANIMATION]
      ];

      questAnimations.forEach(([containerId, animationData]) => {
        const container = document.getElementById(containerId);
        if (!container || !animationData) return;
        container.style.backgroundImage = 'none';
        const animation = window.lottie.loadAnimation({
          container,
          renderer: 'svg',
          loop: !reduceMotion,
          autoplay: !reduceMotion,
          animationData
        });
        if (reduceMotion) animation.goToAndStop(0, true);
      });

      const thumbnailContainer = document.getElementById('quest-thumbnail-animation');
      if (thumbnailContainer && window.QUEST_THUMBNAIL_ANIMATION) {
        thumbnailContainer.style.backgroundImage = 'none';
        const thumbnailAnimation = window.lottie.loadAnimation({
          container: thumbnailContainer,
          renderer: 'svg',
          loop: !reduceMotion,
          autoplay: !reduceMotion,
          animationData: window.QUEST_THUMBNAIL_ANIMATION,
          rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        });
        if (reduceMotion) thumbnailAnimation.goToAndStop(0, true);
      }

      const teachThumbnailContainer = document.getElementById('teach-thumbnail-animation');
      if (teachThumbnailContainer && window.TEACH_THUMBNAIL_ANIMATION) {
        teachThumbnailContainer.style.backgroundImage = 'none';
        const teachThumbnailAnimation = window.lottie.loadAnimation({
          container: teachThumbnailContainer,
          renderer: 'svg',
          loop: !reduceMotion,
          autoplay: !reduceMotion,
          animationData: window.TEACH_THUMBNAIL_ANIMATION,
          rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        });
        if (reduceMotion) teachThumbnailAnimation.goToAndStop(0, true);
      }

      mountCaseCardAnimation(
        document.getElementById('next-teacher-tools-animation'),
        window.TEACH_THUMBNAIL_ANIMATION,
        'Animated Teach Portal and Mobile App preview'
      );
      mountCaseCardAnimation(
        document.getElementById('next-quest-plus-animation'),
        window.QUEST_THUMBNAIL_ANIMATION,
        'Animated Quest+ Learning Experience Redesign preview'
      );
    }

    const artifactImages = [
      { src: 'assets/artifacts/artifact-01-edited.png', alt: 'Mobile commerce discovery and checkout interface', background: '#FFE7BA' },
      { src: 'assets/artifacts/artifact-02.png', alt: 'Enterprise warehouse delivery management interface' },
      { src: 'assets/artifacts/artifact-03.jpg', alt: 'Premier client portal mobile interface system' },
      { src: 'assets/artifacts/artifact-04.jpg', alt: 'Premier warehouse management mobile application' },
      { src: 'assets/artifacts/artifact-05-edited.png', alt: 'Residential property search and filtering interface', background: '#FFF6E3' },
      { src: 'assets/artifacts/artifact-06.jpg', alt: 'Kloudeats restaurant operations interface system' },
      { src: 'assets/artifacts/artifact-quest-01.png', alt: 'Quest+ student learning mobile interface collection', fit: 'cover' },
      { src: 'assets/artifacts/artifact-quest-02.png', alt: 'Quest+ student portal desktop interface collection', fit: 'cover' },
      { src: 'assets/artifacts/artifact-quest-03.png', alt: 'Quest+ teacher tools mobile interface collection', fit: 'cover' },
      { src: 'assets/artifacts/artifact-quest-04.png', alt: 'Quest+ teacher portal desktop interface collection', fit: 'cover' }
    ];
    const artifactOrders = [
      [2, 6, 0, 4, 8, 1, 5, 9, 3, 7],
      [9, 1, 7, 3, 0, 6, 4, 2, 8, 5]
    ];

    document.querySelectorAll('.artifact-marquee').forEach((track, rowIndex) => {
      track.replaceChildren();
      artifactOrders[rowIndex].forEach((imageIndex) => {
        const asset = artifactImages[imageIndex];
        const card = document.createElement('figure');
        card.className = 'artifact-image-card';
        if (asset.background) card.style.backgroundColor = asset.background;
        const image = document.createElement('img');
        image.src = asset.src;
        image.alt = asset.alt;
        if (asset.fit === 'cover') image.classList.add('artifact-image--cover');
        image.loading = 'lazy';
        image.decoding = 'async';
        card.appendChild(image);
        track.appendChild(card);
      });

      const originalCards = Array.from(track.children);
      originalCards.forEach((card) => {
        const duplicate = card.cloneNode(true);
        duplicate.setAttribute('aria-hidden', 'true');
        track.appendChild(duplicate);
      });
    });

    const updateActiveNav = () => {
      const activeCaseView = views.quest && !views.quest.classList.contains('is-hidden')
        ? views.quest
        : (views.project && !views.project.classList.contains('is-hidden') ? views.project : null);
      if (!activeCaseView) return;
      const prefix = activeCaseView === views.quest ? 'quest' : 'project';
      const sections = ['overview', 'problem', 'goal', 'impact', 'decisions'].map(section => `${prefix}-${section}`);
      const anchors = activeCaseView.querySelectorAll('.case-anchor');
      const scrollPos = window.scrollY + 160;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPos) current = id;
      }
      anchors.forEach(a => {
        const href = a.getAttribute('href').replace('#', '');
        const isActive = href === current;
        a.classList.toggle('is-active', isActive);
        if (isActive) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    };

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
  });
