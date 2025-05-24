document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('projectGrid');
    const themeToggle = document.getElementById('theme-toggle');
    const scrollTopButton = document.createElement('button');
    const heroSection = document.getElementById('home');
    const projectsSection = document.getElementById('projects');

    scrollTopButton.id = 'scroll-top';
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopButton);

    // Handle navigation clicks
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const targetSection = document.getElementById(targetId);

                // Hide hero section if navigating to projects
                if (targetId === 'projects') {
                    heroSection.style.display = 'none';
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                } else {
                    heroSection.style.display = 'flex';
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Handle URL hash on page load
    window.addEventListener('load', () => {
        if (window.location.hash === '#projects') {
            heroSection.style.display = 'none';
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    });

    // Scroll to top functionality
    function handleScroll() {
        if (window.scrollY > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    }

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    window.addEventListener('scroll', handleScroll);

    // Custom projects array
    const projects = [
        {
            title: 'Lanya',
            description: 'Open-source Discord bot with moderation, fun commands, and Minecraft integration',
            previewLink: 'https://github.com/birajrai/lanya',
            image: 'https://placehold.co/600x400/5865F2/ffffff?text=Lanya+Bot',
            technologies: ['JavaScript', 'Discord.js', 'MongoDB', 'Node.js'],
        },
        {
            title: 'Imagizer',
            description: 'Image processing and manipulation tool',
            previewLink: 'https://github.com/birajrai/imagizer',
            image: 'https://placehold.co/600x400/EC4899/ffffff?text=Imagizer',
            technologies: ['Nodejs', 'ExpressJs', 'Json'],
        },
        {
            title: 'Kirasmp',
            description: 'SMP Minecraft server management and automation',
            previewLink: 'https://github.com/birajrai/kirasmp',
            image: 'https://placehold.co/600x400/22C55E/ffffff?text=KiraSMP',
            technologies: ['Java', 'Spigot', 'Minecraft', 'Yaml'],
        },
    ];

    // Theme toggle functionality
    function initThemeToggle() {
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
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Function to create a project card
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';

        card.innerHTML = `
            <div class="image-container">
                <img src="${project.image}" alt="${project.title} preview" loading="lazy">
                <button class="preview-btn" onclick="window.open('${project.previewLink}', '_blank')">
                    <i class="fas fa-external-link-alt"></i> View Project
                </button>
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h3>${project.title}</h3>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag small">${tech}</span>`).join('')}
                </div>
            </div>
        `;

        return card;
    }

    // Function to display projects
    function displayProjects() {
        projectGrid.innerHTML = '';

        // Create and append project cards
        projects.forEach(project => {
            const card = createProjectCard(project);
            projectGrid.appendChild(card);
        });
    }

    // Initialize functionality
    initThemeToggle();
    displayProjects();
});
