(function () {
  /* ---- data (edit these) ---- */
  var experienceEntries = [
    {
      now: true,
      role: 'AI Analyst Intern',
      org: 'JDI IT',
      dates: 'Sep 2026 – Present',
      desc: 'Exploring AI-powered solutions and emerging technologies that create business value.',
      skills: ['Artificial Intelligence', 'Emerging Technologies', 'Problem Solving']
    },
    {
      now: true,
      role: 'Student Ambassador – Technical Systems',
      org: 'ShiftKey Labs',
      dates: 'Jan 2026 – Present',
      desc: 'Support the ShiftKey Labs app and website and contribute to student tech events.',
      skills: ['TypeScript', 'Node.js', 'Amazon Web Services (AWS)', 'Back-End Web Development', 'React.js', 'Student Outreach', 'Event Support']
    },
    {
      now: false,
      role: 'Security Analyst Intern',
      org: 'JDI IT',
      dates: 'Jan 2026 – Apr 2026',
      desc: '',
      skills: ['Cybersecurity', 'OWASP']
    },
    {
      now: false,
      role: 'Project Coordinator Intern',
      org: 'JDI IT',
      dates: 'May 2025 – Aug 2025',
      desc: '',
      skills: ['Project Coordination', 'Communication', 'Teamwork']
    }
  ];
  var interestAreas = [
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      title: 'AI that creates real value',
      text: 'I like exploring AI-powered solutions and emerging technologies, and figuring out where they can make a real difference for a business and the people who use it.'
    },
    {
      id: 'sec',
      name: 'Cybersecurity',
      title: 'Thinking like an attacker',
      text: 'Understanding how systems break is the best way to learn how to protect them. I enjoy learning about encryption, safe authentication and how small mistakes become big holes.'
    },
    {
      id: 'math',
      name: 'Mathematics',
      title: 'The reasoning underneath',
      text: 'Studying mathematics alongside computer science sharpens how I approach problems: break them down, prove why something works, then build it.'
    }
  ];
  var projectEntries = [
    {
      category: 'Hackathon', badge: '1st place', title: 'ConQuest', event: 'Gen AI and Mental Wellbeing Hackathon, ShiftKey Labs',
      blurb: 'A speech-to-speech tool that uses Generative AI to help people manage and reduce social anxiety.',
      image: 'project-images/conquest.png', imageAlt: 'ConQuest team presenting the project to judges at a student hackathon',
      tags: ['Generative AI', 'React', 'Flask']
    },
    {
      category: 'Hackathon', title: 'MyTurn', event: 'ShiftKey x WiTS: Breaking Barriers Hackathon',
      blurb: 'A meeting recording tool that promotes inclusive conversations by analyzing speaking time and showing a real-time ratio of male to female voices.',
      image: 'project-images/myturn.png', imageAlt: 'MyTurn app displaying speaking-time results and a meeting transcript',
      tags: ['Inclusive tech', 'Speaking-time analysis']
    },
    {
      category: 'Game Jam', title: 'Bubble Trouble', event: 'Global Game Jam 2025',
      blurb: 'A game where you play a witch defeating ghosts by choosing the right ingredient for a cauldron, which shoots a bubble to eliminate each ghost.',
      image: 'project-images/bubble-trouble.png', imageAlt: 'Pixel-art gameplay from Bubble Trouble, showing a witch, ghosts, and a cauldron',
      tags: ['Unity', 'Game Design']
    }
  ];
  var skillGroups = [
    { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML', 'CSS'] },
    { category: 'Web & Cloud', items: ['React.js', 'Node.js', 'Back-End Web Development', 'Web Development', 'Responsive Web Design', 'Amazon Web Services (AWS)'] },
    { category: 'Security', items: ['OWASP', 'Penetration Testing', 'Kali Linux', 'Metasploit', 'Nmap', 'Wireshark', 'GNS3'] },
    { category: 'Data', items: ['Pandas', 'NumPy', 'Matplotlib'] },
    { category: 'Foundations', items: ['Computer Science', 'Problem Solving', 'Analytical Skills', 'Attention to Detail', 'Teamwork'] }
  ];
  var contactEntries = [
    { label: 'Email', value: 'niaxidos@gmail.com', href: 'mailto:niaxidos@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/niaxidos', href: 'https://www.linkedin.com/in/niaxidos' },
    { label: 'GitHub', value: 'github.com/niaxidos', href: 'https://github.com/niaxidos' }
  ];

  function createElement(tag, className, html) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (html != null) element.innerHTML = html;
    return element;
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[character];
    });
  }

  /* ---- theme ---- */
  var documentRoot = document.documentElement;
  try {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) documentRoot.setAttribute('data-theme', savedTheme);
  } catch (error) {}
  document.getElementById('theme').addEventListener('click', function () {
    var isDarkTheme = documentRoot.getAttribute('data-theme') === 'dark' ||
      (!documentRoot.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var nextTheme = isDarkTheme ? 'light' : 'dark';
    documentRoot.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (error) {}
  });

  /* ---- experience ---- */
  var timeline = document.getElementById('timeline');
  experienceEntries.forEach(function (job) {
    var listItem = createElement('li', 'job' + (job.now ? ' now' : ''));
    listItem.innerHTML =
      '<div class="body"><div class="top"><h3>' + escapeHtml(job.role) + '</h3><span class="badge">' + (job.now ? 'Current' : 'Past') + '</span></div>' +
      '<p class="org">' + escapeHtml(job.org) + '</p>' +
      (job.dates ? '<p class="date">' + escapeHtml(job.dates) + '</p>' : '') +
      (job.desc ? '<p class="desc">' + escapeHtml(job.desc) + '</p>' : '') +
      (job.skills && job.skills.length
        ? '<div class="job-skills" aria-label="Skills used">' + job.skills.map(function (skill) { return '<span>' + escapeHtml(skill) + '</span>'; }).join('') + '</div>'
        : '') +
      '</div>';
    timeline.appendChild(listItem);
  });

  /* ---- interests tabs ---- */
  var interestTabs = document.getElementById('tabs'), interestPanel = document.getElementById('panel');
  function selectInterest(index) {
    Array.prototype.forEach.call(interestTabs.children, function (tabButton, buttonIndex) {
      tabButton.setAttribute('aria-selected', buttonIndex === index ? 'true' : 'false');
      tabButton.tabIndex = buttonIndex === index ? 0 : -1;
    });
    var interest = interestAreas[index];
    interestPanel.innerHTML = '<p class="ph">' + escapeHtml(interest.title) + '</p><p>' + escapeHtml(interest.text) + '</p>';
    interestPanel.setAttribute('aria-labelledby', 'tab-' + interest.id);
  }
  interestAreas.forEach(function (interest, index) {
    var tabButton = createElement('button', 'tab', escapeHtml(interest.name));
    tabButton.type = 'button'; tabButton.id = 'tab-' + interest.id; tabButton.setAttribute('role', 'tab');
    tabButton.addEventListener('click', function () { selectInterest(index); });
    tabButton.addEventListener('keydown', function (event) {
      var nextIndex = event.key === 'ArrowRight' ? index + 1 : event.key === 'ArrowLeft' ? index - 1 : null;
      if (nextIndex === null) return;
      nextIndex = (nextIndex + interestAreas.length) % interestAreas.length;
      selectInterest(nextIndex);
      interestTabs.children[nextIndex].focus();
      event.preventDefault();
    });
    interestTabs.appendChild(tabButton);
  });
  selectInterest(0);

  /* ---- projects ---- */
  var projectFilters = document.getElementById('filters');
  var projectGrid = document.getElementById('grid');
  var emptyState = document.getElementById('empty');
  var categories = ['All'];
  projectEntries.forEach(function (project) {
    if (categories.indexOf(project.category) < 0) categories.push(project.category);
  });
  var projectCards = projectEntries.map(function (project) {
    var card = createElement('article', 'card');
    card.innerHTML =
      '<div class="cat"><span>' + escapeHtml(project.category) + '</span>' + (project.badge ? '<span class="win">' + escapeHtml(project.badge) + '</span>' : '') + '</div>' +
      '<figure class="project-image"><img src="' + escapeHtml(project.image) + '" alt="' + escapeHtml(project.imageAlt) + '" loading="lazy" decoding="async"></figure>' +
      '<h3>' + escapeHtml(project.title) + '</h3><p class="event">' + escapeHtml(project.event) + '</p><p class="blurb">' + escapeHtml(project.blurb) + '</p>' +
      '<div class="tags">' + project.tags.map(function (tag) { return '<span>' + escapeHtml(tag) + '</span>'; }).join('') + '</div>';
    projectGrid.appendChild(card);
    return card;
  });
  function applyProjectFilter(category) {
    var visibleCount = 0;
    projectCards.forEach(function (card, index) {
      var isVisible = category === 'All' || projectEntries[index].category === category;
      card.hidden = !isVisible;
      if (isVisible) visibleCount++;
    });
    emptyState.hidden = visibleCount > 0;
    Array.prototype.forEach.call(projectFilters.children, function (button) {
      button.setAttribute('aria-pressed', button.dataset.cat === category ? 'true' : 'false');
    });
  }
  categories.forEach(function (category) {
    var count = category === 'All' ? projectEntries.length : projectEntries.filter(function (project) {
      return project.category === category;
    }).length;
    var button = createElement('button', 'chip', escapeHtml(category) + '<span class="n">' + count + '</span>');
    button.type = 'button';
    button.dataset.cat = category;
    button.addEventListener('click', function () { applyProjectFilter(category); });
    projectFilters.appendChild(button);
  });
  applyProjectFilter('All');

  /* ---- skills ---- */
  var skillFilters = document.getElementById('skillFilters');
  var skillList = document.getElementById('skillList');
  var allSkills = [];
  skillGroups.forEach(function (skillGroup) {
    skillGroup.items.forEach(function (skillName) {
      allSkills.push({ category: skillGroup.category, name: skillName });
    });
  });
  var skillItems = allSkills.map(function (skill) {
    var listItem = createElement('li', null, escapeHtml(skill.name));
    skillList.appendChild(listItem);
    return listItem;
  });
  function applySkillFilter(groupName) {
    allSkills.forEach(function (skill, index) {
      skillItems[index].hidden = !(groupName === 'All' || skill.category === groupName);
    });
    Array.prototype.forEach.call(skillFilters.children, function (button) {
      button.setAttribute('aria-pressed', button.dataset.g === groupName ? 'true' : 'false');
    });
  }
  [{ category: 'All', items: allSkills }].concat(skillGroups).forEach(function (skillGroup) {
    var button = createElement('button', 'chip', escapeHtml(skillGroup.category) + '<span class="n">' + skillGroup.items.length + '</span>');
    button.type = 'button';
    button.dataset.g = skillGroup.category;
    button.addEventListener('click', function () { applySkillFilter(skillGroup.category); });
    skillFilters.appendChild(button);
  });
  applySkillFilter('All');

  /* ---- contact details ---- */
  var contactRows = document.getElementById('rows');
  contactEntries.forEach(function (contact) {
    var contactRow = createElement('div', 'contact-item',
      '<span class="lab">' + escapeHtml(contact.label) + '</span>' +
      '<span class="val">' +
        (contact.href
          ? '<a href="' + escapeHtml(contact.href) + '"' +
            (contact.href.indexOf('http') === 0 ? ' target="_blank" rel="noopener noreferrer"' : '') +
            '>' + escapeHtml(contact.value) + '</a>'
          : escapeHtml(contact.value)) +
      '</span>');
    contactRows.appendChild(contactRow);
  });

  /* ---- nav highlight ---- */
  var navLinks = document.querySelectorAll('.bar nav a[data-sec]');
  var sectionIds = Array.prototype.map.call(navLinks, function (link) { return link.dataset.sec; });
  function updateActiveSection() {
    var activeSection = null;
    sectionIds.forEach(function (id) {
      var section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top < window.innerHeight * 0.4) activeSection = id;
    });
    navLinks.forEach(function (link) {
      if (link.dataset.sec === activeSection) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();

  /* ---- petal trail (mouse only, skipped when motion is reduced) ---- */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var petalColors = ['--berry', '--butter', '--blush', '--sage'];
    var activePetalCount = 0;
    var activeTrailPetalCount = 0;
    var previousPointerPosition = null;
    var distanceSincePetal = 0;
    var createPetal = function (x, y, isBurst) {
      if (activePetalCount >= 32) return;
      if (!isBurst && activeTrailPetalCount >= 12) return;
      var petalElement = document.createElement('div');
      var angle = Math.random() * Math.PI * 2;
      var driftDistance = 30 + Math.random() * 56;
      petalElement.className = 'petal';
      petalElement.style.left = x + 'px';
      petalElement.style.top = y + 'px';
      petalElement.style.setProperty('--pc', 'var(' + petalColors[(Math.random() * petalColors.length) | 0] + ')');
      petalElement.style.setProperty('--dx', (isBurst ? Math.cos(angle) * driftDistance : (Math.random() - 0.5) * 30) + 'px');
      petalElement.style.setProperty('--dy', (isBurst ? Math.sin(angle) * driftDistance + 18 : 26 + Math.random() * 36) + 'px');
      petalElement.style.setProperty('--rot', ((Math.random() - 0.5) * 420) + 'deg');
      petalElement.style.setProperty('--dur', (800 + Math.random() * 700) + 'ms');
      activePetalCount++;
      if (!isBurst) activeTrailPetalCount++;
      petalElement.addEventListener('animationend', function () {
        petalElement.remove();
        activePetalCount--;
        if (!isBurst) activeTrailPetalCount--;
      });
      document.body.appendChild(petalElement);
    };
    window.addEventListener('pointermove', function (event) {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      var timestamp = performance.now();
      if (!previousPointerPosition) {
        previousPointerPosition = { x: event.clientX, y: event.clientY, t: timestamp };
        return;
      }
      var dx = event.clientX - previousPointerPosition.x;
      var dy = event.clientY - previousPointerPosition.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      var speed = distance / Math.max(1, timestamp - previousPointerPosition.t);
      previousPointerPosition = { x: event.clientX, y: event.clientY, t: timestamp };
      distanceSincePetal += distance;
      var spacing = speed > .8 ? 160 : 120;
      if (distanceSincePetal >= spacing) {
        distanceSincePetal %= spacing;
        createPetal(event.clientX, event.clientY, false);
      }
    }, { passive: true });
    window.addEventListener('pointerdown', function (event) {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      for (var index = 0; index < 5; index++) createPetal(event.clientX, event.clientY, true);
    });
  }

})();
