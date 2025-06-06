// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const scrollTopBtn = document.getElementById('scroll-top');
const typingText = document.getElementById('typing-text');
const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');
const themeToggle = document.getElementById('theme-toggle');
const colorToggle = document.getElementById('color-toggle');
const colorPanel = document.getElementById('color-panel');
const colorPanelClose = document.getElementById('color-panel-close');
const statusTooltip = document.getElementById('status-tooltip');
const spotifyPlayer = document.getElementById('spotify-player');
const spotifyToggle = document.getElementById('spotify-toggle');

// Global Variables
let currentSkillCategory = 'frontend';
let currentProjectFilter = 'all';
let currentDiscordData = null;

// Color Themes
const colorThemes = {
    default: {
        primary: '#6366f1',
        secondary: '#10b981',
        accent: '#f59e0b',
    },
    ocean: {
        primary: '#0ea5e9',
        secondary: '#06b6d4',
        accent: '#8b5cf6',
    },
    sunset: {
        primary: '#f97316',
        secondary: '#ef4444',
        accent: '#eab308',
    },
    forest: {
        primary: '#059669',
        secondary: '#65a30d',
        accent: '#ca8a04',
    },
};

// Experience Data
const experienceData = [
    {
        title: 'Full Stack Developer',
        company: 'Freelance',
        period: '2022 - Present',
        description:
            'Developing web applications for various clients using modern technologies. Specialized in React, Node.js, and database design.',
        skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        icon: 'fas fa-briefcase',
    },
];

// Education Data
const educationData = [
    {
        title: 'High School (+2)',
        institution: 'Management Stream (Commerce with Mathematics & Computer Science)',
        period: '2025 - Present',
        description:
            'Studying in the Management stream with a focus on Mathematics, Computer Science, and Commerce. This helps me improve problem-solving, logical thinking, and basic knowledge of technology and finance.',
        skills: ['Mathematics', 'Computer Science', 'Economics', 'Accounting'],
        icon: 'fas fa-book',
    },
];

// Skills Data
const skillsData = {
    frontend: [
        { name: 'React', icon: 'fab fa-react' },
        { name: 'JavaScript', icon: 'fab fa-js-square' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Tailwind', icon: 'fas fa-palette' },
        { name: 'Next.js', icon: 'fas fa-code' },
    ],
    backend: [
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Express.js', icon: 'fas fa-server' },
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'PHP', icon: 'fab fa-php' },
        { name: 'REST API', icon: 'fas fa-exchange-alt' },
    ],
    database: [
        { name: 'MongoDB', icon: 'fas fa-leaf' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'Redis', icon: 'fas fa-memory' },
        { name: 'SQLite', icon: 'fas fa-database' },
    ],
    tools: [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'VS Code', icon: 'fas fa-code' },
        { name: 'Vercel', icon: 'fas fa-cloud' },
        { name: 'AWS', icon: 'fab fa-aws' },
    ],
};

// Projects Data
const projectsData = [
    {
        id: 1,
        title: 'Lanya Discord Bot',
        description:
            'Advanced Discord bot with moderation, entertainment, and Minecraft server integration. Features include custom commands, auto-moderation, music playback, and server statistics.',
        image: 'https://placehold.co/600x400/5865F2/ffffff?text=Lanya+Bot',
        technologies: ['JavaScript', 'Discord.js', 'MongoDB', 'Node.js'],
        category: 'bot',
        liveUrl: 'https://discord.gg/5q8jrp4cj5',
        githubUrl: 'https://github.com/birajrai/lanya',
        featured: true,
    },
    {
        id: 2,
        title: 'Imagizer Tool',
        description:
            'Powerful image processing and manipulation tool with features like resizing, format conversion, compression, and batch processing capabilities.',
        image: 'https://placehold.co/600x400/EC4899/ffffff?text=Imagizer',
        technologies: ['Node.js', 'Express.js', 'Sharp', 'Multer'],
        category: 'tool',
        liveUrl: '#',
        githubUrl: 'https://github.com/birajrai/imagizer',
        featured: true,
    },
    {
        id: 3,
        title: 'KiraSMP Server',
        description:
            'Minecraft SMP server management system with custom plugins, player statistics, economy system, and automated server maintenance.',
        image: 'https://placehold.co/600x400/22C55E/ffffff?text=KiraSMP',
        technologies: ['Java', 'Spigot', 'MySQL', 'YAML'],
        category: 'tool',
        liveUrl: 'https://modrinth.com/plugin/kirasmp',
        githubUrl: 'https://github.com/birajrai/kirasmp',
        featured: true,
    },
    {
        id: 4,
        title: 'Mero Patra',
        description:
            'A modern, responsive website for Mero Patra, a Nepali news portal. Built with Next.js and TailwindCSS, it features a headless WordPress CMS for dynamic content management.',
        image: 'https://placehold.co/600x400/6366f1/ffffff?text=Mero Patra',
        technologies: ['NextJs', 'TailwindCSS', 'WordPress Headless CMS'],
        category: 'web',
        liveUrl: 'https://www.meropatra.com/',
        githubUrl: '#',
        featured: false,
    },
    {
        id: 5,
        title: 'Task Manager App',
        description:
            'Full-stack task management application with user authentication, real-time updates, and collaborative features for team productivity.',
        image: 'https://placehold.co/600x400/8B5CF6/ffffff?text=Task+Manager',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        category: 'web',
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
    },
    {
        id: 6,
        title: 'Weather Checker',
        description:
            'Interactive weather dashboard with location-based forecasts, weather maps, and historical data visualization using modern APIs.',
        image: 'https://placehold.co/600x400/F59E0B/ffffff?text=Weather+App',
        technologies: ['Vue.js', 'Chart.js', 'Weather API', 'Tailwind'],
        category: 'web',
        liveUrl: 'https://birajrai.github.io/weather-app/',
        githubUrl: 'https://github.com/birajrai/weather-app',
        featured: false,
    },
];

// Typing Animation
const typingTexts = [
    'Full Stack Developer',
    'Code Artist',
    'DevOps Enthusiast',
    'Tech Enthusiast',
    'Open Source Contributor',
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (!typingText) return;

    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = Number.parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Color Customization Functions
function initColorCustomization() {
    if (!colorToggle || !colorPanel) return;

    // Load saved colors
    loadSavedColors();

    // Color toggle button
    colorToggle.addEventListener('click', () => {
        colorPanel.classList.toggle('active');
    });

    // Close color panel
    colorPanelClose.addEventListener('click', () => {
        colorPanel.classList.remove('active');
    });

    // Theme presets
    document.querySelectorAll('.theme-preset').forEach(preset => {
        preset.addEventListener('click', () => {
            const theme = preset.getAttribute('data-theme');
            applyColorTheme(theme);

            // Update active preset
            document.querySelectorAll('.theme-preset').forEach(p => p.classList.remove('active'));
            preset.classList.add('active');
        });
    });

    // Custom color inputs
    document.getElementById('primary-color').addEventListener('input', e => {
        updateCustomColor('primary', e.target.value);
    });

    document.getElementById('secondary-color').addEventListener('input', e => {
        updateCustomColor('secondary', e.target.value);
    });

    document.getElementById('accent-color').addEventListener('input', e => {
        updateCustomColor('accent', e.target.value);
    });

    // Reset colors
    document.getElementById('reset-colors').addEventListener('click', () => {
        applyColorTheme('default');
        document.querySelectorAll('.theme-preset').forEach(p => p.classList.remove('active'));
        document.querySelector('[data-theme="default"]').classList.add('active');
    });

    // Close panel when clicking outside
    document.addEventListener('click', e => {
        if (!colorPanel.contains(e.target) && !colorToggle.contains(e.target)) {
            colorPanel.classList.remove('active');
        }
    });
}

function applyColorTheme(themeName) {
    const theme = colorThemes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--accent-color', theme.accent);

    // Update darker/lighter variants
    root.style.setProperty('--primary-dark', adjustBrightness(theme.primary, -20));
    root.style.setProperty('--primary-light', adjustBrightness(theme.primary, 20));

    // Update color inputs
    document.getElementById('primary-color').value = theme.primary;
    document.getElementById('secondary-color').value = theme.secondary;
    document.getElementById('accent-color').value = theme.accent;

    // Save to localStorage
    localStorage.setItem('colorTheme', JSON.stringify(theme));
}

function updateCustomColor(type, color) {
    const root = document.documentElement;
    root.style.setProperty(`--${type}-color`, color);

    if (type === 'primary') {
        root.style.setProperty('--primary-dark', adjustBrightness(color, -20));
        root.style.setProperty('--primary-light', adjustBrightness(color, 20));
    }

    // Save custom colors
    const customTheme = {
        primary: document.getElementById('primary-color').value,
        secondary: document.getElementById('secondary-color').value,
        accent: document.getElementById('accent-color').value,
    };
    localStorage.setItem('colorTheme', JSON.stringify(customTheme));

    // Remove active state from presets
    document.querySelectorAll('.theme-preset').forEach(p => p.classList.remove('active'));
}

function adjustBrightness(hex, percent) {
    const num = Number.parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x0000ff) + amt;
    return (
        '#' +
        (
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        )
            .toString(16)
            .slice(1)
    );
}

function loadSavedColors() {
    const savedTheme = localStorage.getItem('colorTheme');
    if (savedTheme) {
        const theme = JSON.parse(savedTheme);
        const root = document.documentElement;
        root.style.setProperty('--primary-color', theme.primary);
        root.style.setProperty('--secondary-color', theme.secondary);
        root.style.setProperty('--accent-color', theme.accent);
        root.style.setProperty('--primary-dark', adjustBrightness(theme.primary, -20));
        root.style.setProperty('--primary-light', adjustBrightness(theme.primary, 20));

        // Update color inputs
        document.getElementById('primary-color').value = theme.primary;
        document.getElementById('secondary-color').value = theme.secondary;
        document.getElementById('accent-color').value = theme.accent;
    }
}

// Enhanced Discord Status with Tooltips
async function fetchDiscordStatus() {
    try {
        const response = await fetch('https://discordstatus.dapirates.xyz/user/835126233455919164/');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        currentDiscordData = data;

        // Update Discord status in hero with animation
        updateHeroStatus(data);

        // Update Spotify player
        updateSpotifyPlayer(data);

        console.log('✅ Discord status updated successfully');
    } catch (error) {
        console.log('⚠️ Status API not available:', error.message);
        setOfflineStatus();
    }
}

function updateHeroStatus(data) {
    const discordStatus = document.getElementById('discord-status');
    if (!discordStatus) return;

    const statusDot = discordStatus.querySelector('.status-dot');
    if (statusDot) {
        statusDot.style.opacity = '0';
        setTimeout(() => {
            statusDot.className = `status-dot ${data.status}`;
            statusDot.style.opacity = '1';
        }, 150);
    }
}

function updateSpotifyPlayer(data) {
    if (!spotifyPlayer) return;

    if (data.spotify) {
        const album = spotifyPlayer.querySelector('.spotify-player-album');
        const song = spotifyPlayer.querySelector('.spotify-player-song');
        const artist = spotifyPlayer.querySelector('.spotify-player-artist');

        if (album && song && artist) {
            album.src = data.spotify.album_art_url;
            album.onerror = () => {
                album.src = 'https://placehold.co/50x50/1db954/ffffff?text=♪';
            };
            song.textContent = data.spotify.song;
            artist.textContent = `by ${data.spotify.artist}`;

            spotifyPlayer.style.display = 'block';
            setTimeout(() => {
                spotifyPlayer.style.opacity = '1';
                spotifyPlayer.style.transform = 'translateY(0)';
            }, 100);
        }
    } else {
        spotifyPlayer.style.opacity = '0';
        spotifyPlayer.style.transform = 'translateY(20px)';
        setTimeout(() => {
            spotifyPlayer.style.display = 'none';
        }, 300);
    }
}

function setOfflineStatus() {
    const discordStatus = document.getElementById('discord-status');
    if (discordStatus) {
        const statusDot = discordStatus.querySelector('.status-dot');
        if (statusDot) {
            statusDot.className = 'status-dot offline';
        }
    }

    if (spotifyPlayer) {
        spotifyPlayer.style.display = 'none';
    }
}

// Discord Status Tooltip
function initStatusTooltip() {
    const discordStatus = document.getElementById('discord-status');
    if (!discordStatus || !statusTooltip) return;

    let tooltipTimeout;

    discordStatus.addEventListener('mouseenter', () => {
        if (currentDiscordData) {
            showStatusTooltip(currentDiscordData);
        }
    });

    discordStatus.addEventListener('mouseleave', () => {
        hideStatusTooltip();
    });

    discordStatus.addEventListener('mousemove', e => {
        if (statusTooltip.classList.contains('visible')) {
            positionTooltip(e);
        }
    });
}

function showStatusTooltip(data) {
    if (!statusTooltip) return;

    const tooltipIndicator = statusTooltip.querySelector('.tooltip-indicator');
    const tooltipText = statusTooltip.querySelector('.tooltip-text');
    const tooltipActivity = statusTooltip.querySelector('.tooltip-activity');
    const tooltipTime = statusTooltip.querySelector('.tooltip-time');

    // Update tooltip content
    tooltipIndicator.className = `tooltip-indicator ${data.status}`;
    tooltipText.textContent = data.status.charAt(0).toUpperCase() + data.status.slice(1);

    // Add custom status if available
    if (data.custom_status) {
        tooltipActivity.textContent = data.custom_status;
        tooltipActivity.style.display = 'block';
    } else if (data.activities && data.activities.length > 0) {
        const activity = data.activities[0];
        tooltipActivity.textContent = `${activity.type} ${activity.name}`;
        tooltipActivity.style.display = 'block';
    } else {
        tooltipActivity.style.display = 'none';
    }

    // Add timestamp
    tooltipTime.textContent = `Last updated: ${new Date().toLocaleTimeString()}`;

    statusTooltip.classList.add('visible');
}

function hideStatusTooltip() {
    if (statusTooltip) {
        statusTooltip.classList.remove('visible');
    }
}

function positionTooltip(e) {
    if (!statusTooltip) return;

    const rect = statusTooltip.getBoundingClientRect();
    const x = e.clientX + 10;
    const y = e.clientY - rect.height - 10;

    statusTooltip.style.left = `${Math.min(x, window.innerWidth - rect.width - 10)}px`;
    statusTooltip.style.top = `${Math.max(y, 10)}px`;
}

// Spotify Player Controls
function initSpotifyPlayer() {
    if (!spotifyToggle) return;

    spotifyToggle.addEventListener('click', () => {
        spotifyPlayer.classList.toggle('minimized');
    });

    // Auto-hide after inactivity
    let inactivityTimer;
    const resetInactivityTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            if (!spotifyPlayer.classList.contains('minimized')) {
                spotifyPlayer.classList.add('minimized');
            }
        }, 10000); // Hide after 10 seconds of inactivity
    };

    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keypress', resetInactivityTimer);
    resetInactivityTimer();
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
}

// Theme Toggle
function initThemeToggle() {
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// Enhanced Navigation with improved mobile UX
function initNavigation() {
    if (!navToggle || !navMenu) return;

    // Mobile menu toggle with enhanced animations
    navToggle.addEventListener('click', e => {
        e.stopPropagation();
        const isActive = navToggle.classList.contains('active');

        if (!isActive) {
            // Opening menu
            navToggle.classList.add('active');
            navMenu.classList.add('active');
            document.body.classList.add('nav-open');

            // Animate menu items with optimized performance
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'translateX(20px)';
                setTimeout(() => {
                    link.style.transition = 'all 0.3s ease';
                    link.style.opacity = '1';
                    link.style.transform = 'translateX(0)';
                }, index * 50 + 100);
            });
        } else {
            // Closing menu
            closeNavMenu();
        }
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            closeNavMenu();
        });
    });

    // Close mobile menu when clicking on backdrop
    document.addEventListener('click', e => {
        if (navMenu.classList.contains('active') && !navbar.contains(e.target)) {
            closeNavMenu();
        }
    });

    // Enhanced scroll effects with performance optimization
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
        const currentScrollY = window.scrollY;

        if (navbar) {
            if (currentScrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Hide navbar on scroll down, show on scroll up (mobile optimization)
            if (window.innerWidth <= 768) {
                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
            }
        }

        lastScrollY = currentScrollY;
        updateActiveNavLink();

        // Show/hide scroll to top button
        if (scrollTopBtn) {
            if (currentScrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }

        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // Scroll to top with smooth animation
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    }
}

function closeNavMenu() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('nav-open');
}

// Update active navigation link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Skills Section
function initSkills() {
    const skillCategories = document.querySelectorAll('.skill-category');

    skillCategories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryName = category.getAttribute('data-category');

            // Update active category
            skillCategories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');

            // Update skills grid
            currentSkillCategory = categoryName;
            renderSkills();
        });
    });

    // Initial render
    renderSkills();
}

function renderSkills() {
    if (!skillsGrid) return;

    const skills = skillsData[currentSkillCategory];

    skillsGrid.innerHTML = skills
        .map(
            skill => `
        <div class="skill-item fade-in">
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
        </div>
    `
        )
        .join('');

    // Trigger animation with performance optimization
    setTimeout(() => {
        skillsGrid.querySelectorAll('.skill-item').forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 50); // Reduced delay for better performance
        });
    }, 50);
}

// Experience Toggle
function initExperienceToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const timelines = document.querySelectorAll('.timeline');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const toggleType = btn.getAttribute('data-toggle');

            // Update active toggle button
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show/hide timelines
            timelines.forEach(timeline => {
                timeline.classList.remove('active');
                if (timeline.id === `${toggleType}-timeline`) {
                    timeline.classList.add('active');
                }
            });
        });
    });

    // Render experience and education
    renderExperience();
    renderEducation();
}

function renderExperience() {
    const experienceTimeline = document.getElementById('experience-timeline');
    if (!experienceTimeline) return;

    experienceTimeline.innerHTML = experienceData
        .map(
            item => `
    <div class="timeline-item">
      <div class="timeline-marker">
        <i class="${item.icon}"></i>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3>${item.title}</h3>
          <span class="timeline-date">${item.period}</span>
        </div>
        <h4>${item.company}</h4>
        <p>${item.description}</p>
        <div class="timeline-skills">
          ${item.skills.map(skill => `<span>${skill}</span>`).join('')}
        </div>
      </div>
    </div>
  `
        )
        .join('');
}

function renderEducation() {
    const educationTimeline = document.getElementById('education-timeline');
    if (!educationTimeline) return;

    educationTimeline.innerHTML = educationData
        .map(
            item => `
    <div class="timeline-item">
      <div class="timeline-marker">
        <i class="${item.icon}"></i>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3>${item.title}</h3>
          <span class="timeline-date">${item.period}</span>
        </div>
        <h4>${item.institution}</h4>
        <p>${item.description}</p>
        <div class="timeline-skills">
          ${item.skills.map(skill => `<span>${skill}</span>`).join('')}
        </div>
      </div>
    </div>
  `
        )
        .join('');
}

// Projects Section
function initProjects() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update projects grid
            currentProjectFilter = filter;
            renderProjects();
        });
    });

    // Initial render
    renderProjects();
}

function renderProjects() {
    if (!projectsGrid) return;

    const filteredProjects =
        currentProjectFilter === 'all'
            ? projectsData
            : projectsData.filter(project => project.category === currentProjectFilter);

    projectsGrid.innerHTML = filteredProjects
        .map(
            project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <a href="${project.liveUrl}" target="_blank" class="project-btn">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                    <a href="${project.githubUrl}" target="_blank" class="project-btn">
                        <i class="fab fa-github"></i>
                        Code
                    </a>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `
        )
        .join('');

    // Animate project cards with performance optimization
    setTimeout(() => {
        projectsGrid.querySelectorAll('.project-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 50);
}

// Enhanced Resume Download with user feedback
function downloadResume() {
    // Show loading state
    const button = event.target.closest('.btn');
    const originalText = button.innerHTML;

    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Downloading...</span>';
    button.disabled = true;

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/assets/resume/Biraj Rai.pdf';
    link.download = 'Biraj_Rai_Resume.pdf';
    link.target = '_blank';

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset button after delay
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;

        // Show success feedback
        button.innerHTML = '<i class="fas fa-check"></i> <span>Downloaded!</span>';
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
    }, 1000);

    // Track download event
    console.log('📄 Resume downloaded by user');
}

// Optimized Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
}

// Optimized Parallax Effect
function initParallax() {
    let ticking = false;

    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-shapes .shape');

        parallaxElements.forEach((element, index) => {
            const speed = 0.3 + index * 0.1; // Reduced speed for better performance
            element.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
        });

        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking && window.innerWidth > 768) {
            // Only on desktop for performance
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Performance optimization: Reduce motion for users who prefer it
function initReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--transition-fast', '0s');
        document.documentElement.style.setProperty('--transition-normal', '0s');
        document.documentElement.style.setProperty('--transition-slow', '0s');
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initReducedMotion();
    typeWriter();
    animateCounters();
    initScrollAnimations();
    initNavigation();
    initThemeToggle();
    initColorCustomization();
    initStatusTooltip();
    initSpotifyPlayer();
    initSkills();
    initExperienceToggle();
    initProjects();
    initSmoothScrolling();
    initParallax();
    fetchDiscordStatus();

    // Refresh status every 30 seconds
    setInterval(fetchDiscordStatus, 30000);
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '👋 Come back! - Biraj Rai';
    } else {
        document.title = 'Biraj Rai | Full Stack Developer & Code Artist';
    }
});

// Performance optimization: Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
initLazyLoading();

// Error handling for external resources
window.addEventListener('error', e => {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://placehold.co/400x400/6366f1/ffffff?text=Image+Not+Found';
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }

    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        if (navMenu.classList.contains('active')) {
            closeNavMenu();
        }
        if (colorPanel.classList.contains('active')) {
            colorPanel.classList.remove('active');
        }
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Console message for developers
console.log(`
🚀 Welcome to Biraj Rai's Portfolio!
👨‍💻 Built with vanilla JavaScript, HTML5, and CSS3
🎨 Designed with love and attention to detail
📧 Contact: contact@birajrai.com
🔗 GitHub: https://github.com/birajrai

Thanks for checking out the code! 😊
`);
