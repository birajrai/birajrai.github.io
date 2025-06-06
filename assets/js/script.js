// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const scrollTopBtn = document.getElementById('scroll-top');
const typingText = document.getElementById('typing-text');
const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');
const themeToggle = document.getElementById('theme-toggle');
const statusContainer = document.getElementById('status-container');

// Global Variables
let currentSkillCategory = 'frontend';
let currentProjectFilter = 'all';

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
    {
        title: 'Discord Bot Developer',
        company: 'Open Source Projects',
        period: '2021 - Present',
        description:
            'Created and maintained Discord bots with advanced features including moderation, entertainment, and Minecraft server integration.',
        skills: ['JavaScript', 'Discord.js', 'MongoDB', 'API Integration'],
        icon: 'fas fa-code',
    },
    {
        title: 'Self-Taught Developer',
        company: 'Continuous Learning',
        period: '2020 - 2022',
        description:
            'Started my programming journey with web development fundamentals, gradually expanding to full-stack development through online courses and projects.',
        skills: ['HTML/CSS', 'JavaScript', 'Git', 'Problem Solving'],
        icon: 'fas fa-laptop-code',
    },
];

// Education Data
const educationData = [
    {
        title: 'Computer Science Studies',
        institution: 'Self-Directed Learning',
        period: '2020 - 2024',
        description:
            'Comprehensive study of computer science fundamentals including algorithms, data structures, and software engineering principles through online platforms.',
        skills: ['Algorithms', 'Data Structures', 'Software Engineering', 'System Design'],
        icon: 'fas fa-graduation-cap',
    },
    {
        title: 'Web Development Certification',
        institution: 'FreeCodeCamp',
        period: '2021',
        description:
            'Completed comprehensive web development curriculum covering frontend and backend technologies, responsive design, and modern frameworks.',
        skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
        icon: 'fas fa-certificate',
    },
    {
        title: 'High School',
        institution: 'Science Stream',
        period: '2018 - 2020',
        description:
            'Completed high school education with focus on mathematics and science, which provided a strong foundation for logical thinking and problem-solving.',
        skills: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
        icon: 'fas fa-book',
    },
];

// Skills Data
const skillsData = {
    frontend: [
        { name: 'React', icon: 'fab fa-react' },
        { name: 'JavaScript', icon: 'fab fa-js-square' },
        { name: 'TypeScript', icon: 'fab fa-js-square' },
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

// Status Fetcher
async function fetchDiscordStatus() {
    try {
        const response = await fetch('https://discord-user-status.onrender.com/user/835126233455919164/');
        const data = await response.json();

        if (statusContainer) {
            renderStatus(data);
        }
    } catch (error) {
        console.log('Status API not available:', error);
        if (statusContainer) {
            statusContainer.innerHTML = `
        <div class="status-card offline">
          <div class="status-indicator offline"></div>
          <div class="status-info">
            <span class="status-text">Currently Offline</span>
            <span class="status-subtext">Status unavailable</span>
          </div>
        </div>
      `;
        }
    }
}

function renderStatus(data) {
    if (!statusContainer) return;

    const statusColors = {
        online: '#10b981',
        idle: '#f59e0b',
        dnd: '#ef4444',
        offline: '#6b7280',
    };

    let statusHTML = `
    <div class="status-card ${data.status}">
      <div class="status-indicator ${data.status}" style="background-color: ${statusColors[data.status]}"></div>
      <div class="status-info">
        <span class="status-text">${data.status.charAt(0).toUpperCase() + data.status.slice(1)}</span>
  `;

    // Add custom status if available
    if (data.custom_status) {
        statusHTML += `<span class="status-subtext">${data.custom_status}</span>`;
    }

    // Add activity if available
    if (data.activities && data.activities.length > 0) {
        const activity = data.activities[0];
        statusHTML += `<span class="status-activity">${activity.type} ${activity.name}</span>`;
    }

    statusHTML += `
      </div>
    </div>
  `;

    // Add Spotify if available
    if (data.spotify) {
        statusHTML += `
      <div class="spotify-card">
        <div class="spotify-info">
          <img src="${data.spotify.album_art_url}" alt="Album Art" class="spotify-album">
          <div class="spotify-details">
            <span class="spotify-song">${data.spotify.song}</span>
            <span class="spotify-artist">by ${data.spotify.artist}</span>
          </div>
        </div>
        <div class="spotify-icon">
          <i class="fab fa-spotify"></i>
        </div>
      </div>
    `;
    }

    statusContainer.innerHTML = statusHTML;
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

// Navigation
function initNavigation() {
    if (!navToggle || !navMenu) return;

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', e => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (navbar && window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else if (navbar) {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link
        updateActiveNavLink();

        // Show/hide scroll to top button
        if (scrollTopBtn) {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    // Scroll to top
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    }
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

    // Trigger animation
    setTimeout(() => {
        skillsGrid.querySelectorAll('.skill-item').forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        });
    }, 100);
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

    // Animate project cards
    setTimeout(() => {
        projectsGrid.querySelectorAll('.project-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 100);
}

// Download Resume
function downloadResume() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/assets/resume/Biraj_Rai_Resume.pdf'; // Update this path to your actual resume file
    link.download = 'Biraj_Rai_Resume.pdf';
    link.target = '_blank';

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
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

// Parallax Effect
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-shapes .shape');

        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + index * 0.1;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    animateCounters();
    initScrollAnimations();
    initNavigation();
    initThemeToggle();
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
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('nav-open');
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
