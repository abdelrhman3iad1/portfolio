// ─── CV Data ────────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.

export const cvData = {
  personal: {
    name: 'Abdelrhman Ahmed Aiiad',
    title: 'Backend Engineer',
    tagline: 'Building scalable systems with',
    highlightWords: ['PHP', 'Laravel', '& Real-Time Tech'],
    location: 'Cairo, Egypt',
    phone: '+201027492368',
    email: 'abdelrhman.aiiad@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abdelrhman-aiiad',
    github: 'https://github.com/abdelrhman3iad1',
    summary:
      'Backend Engineer with 2 years of experience building scalable backend systems. Experienced in developing production-ready applications, optimizing performance, integrating third-party services, and delivering secure, reliable software. Passionate about clean architecture, problem solving, and continuous learning.',
  },

  experience: [
    {
      id: 1,
      role: 'Backend Developer',
      company: 'Bevatel',
      project: 'Hojuzat Project',
      period: 'October 2025 – Present',
      current: true,
      bullets: [
        'Redesigned and shipped the multi-room selection, booking, and payment flows, solving data-conflict and integrity issues with structured failure logging',
        'Improved third-party search integration, cutting API requests by 50% and reducing latency',
        'Owned stabilization of core production modules (search, booking, payment, auth), resolving critical issues to deliver a reliable platform at scale, and covering several modules with integration and unit test cases',
        'Implemented price-drop detection in the search cycle end-to-end: background processing with live updates via WebSockets',
        'Contributed to the Filament admin dashboard and a Strapi CMS with Node.js, collaborating daily with frontend, mobile, QA, and product teams',
      ],
      stack: ['PHP', 'Laravel', 'PostgreSQL', 'Redis', 'Docker', 'Laravel Horizon', 'Filament', 'Pest', 'Laravel Reverb', 'Typesense', 'Node.js', 'Strapi'],
    },
    {
      id: 2,
      role: 'Backend Developer',
      company: 'Smart WOW',
      project: null,
      period: 'January 2025 – July 2025',
      current: false,
      bullets: [
        'Contributed as a PHP Laravel Developer to a SaaS, HMVC module-based platform for flight booking across several suppliers',
        'Implemented the full cycle of coupons, currencies, companies, wallet system, and markups module',
        'Contributed to the Super Admin Dashboard using Vue.js, implementing CRUD operations across several modules',
      ],
      stack: ['PHP', 'Laravel', 'Vue.js', 'SaaS', 'HMVC'],
    },
    {
      id: 3,
      role: 'Backend Developer',
      company: 'PeaCode',
      project: 'Internship',
      period: 'August 2024 – November 2024',
      current: false,
      bullets: [
        'Collaborated on a Sports Tracking Application integrating third-party APIs',
        'Built and optimized features including live scores, calendar fixtures, and competition timing',
      ],
      stack: ['PHP', 'Laravel', 'Third-Party APIs'],
    },
  ],

  education: [
    {
      institution: 'Egyptian E-Learning University – Menoufia',
      degree: 'Bachelor of Information Technology and Computer Science',
      period: 'Sep 2021 – Jun 2025',
      gpa: '3.1 (Very Good)',
    },
  ],

  projects: [
    {
      id: 1,
      name: 'Filament Event-Driven Real-Time Dashboard',
      description:
        'Fully event-driven system with instant in-app notifications inside a Filament SPA, high-performance background processing, and Laravel Octane for minimal request boot time.',
      stack: ['Laravel 12', 'PostgreSQL', 'Reverb', 'Echo', 'Horizon', 'Redis', 'Octane', 'OpenSwoole', 'Filament'],
      link: 'https://github.com/abdelrhman3iad1/filament-event-driven-dashboard',
      highlights: [
        'Event-driven with Laravel Events & Listeners',
        'Laravel Reverb + Echo for real-time notifications',
        'Separate queue workers via Horizon supervisors',
        'Laravel Octane (OpenSwoole) for in-memory booting',
      ],
      featured: true,
    },
    {
      id: 2,
      name: 'Learning Management System',
      description:
        'Full-featured LMS with repository-service design pattern, JWT authentication, and a roles & permissions authorization system.',
      stack: ['Laravel 12', 'MySQL', 'JWT', 'RBAC'],
      link: 'https://github.com/abdelrhman3iad1/Advanced_LMS',
      highlights: [
        'Repository-Service Design Pattern',
        'Events and Listeners architecture',
        'JWT Authentication',
        'Roles and Permissions Authorization',
      ],
      featured: true,
    },
    {
      id: 3,
      name: 'E-Commerce Console App',
      description:
        'Java console application demonstrating OOP principles — Inheritance, Encapsulation, Polymorphism, and Abstraction.',
      stack: ['Java', 'OOP'],
      link: 'https://github.com/abdelrhman3iad1/E-CommerceSystem',
      highlights: ['OOP principles applied throughout', 'Clean architecture'],
      featured: false,
    },
    {
      id: 4,
      name: 'E-Commerce RESTful APIs',
      description:
        'Complete e-commerce backend with cart and order management, product management, recommendation search, and a Blade MVC dashboard.',
      stack: ['Laravel 11', 'MySQL', 'REST API', 'Blade'],
      link: 'https://github.com/abdelrhman3iad1/Intellishop-api',
      highlights: [
        'Cart and Order Management',
        'Product Management',
        'Recommendation Search',
        'Blade MVC Dashboard',
      ],
      featured: false,
    },
    {
      id: 5,
      name: 'Simple CRUD RESTful API',
      description:
        'A lightweight RESTful API built with Express.js and MongoDB demonstrating Node.js backend fundamentals.',
      stack: ['Express.js', 'MongoDB', 'Node.js', 'REST API'],
      link: 'https://github.com/abdelrhman3iad1/express-app',
      highlights: ['Full CRUD operations', 'RESTful conventions'],
      featured: false,
    },
  ],

  skills: {
    Backend: [
      { name: 'PHP', level: 90 },
      { name: 'Laravel', level: 92 },
      { name: 'Node.js', level: 68 },
      { name: 'Express.js', level: 62 },
      { name: 'Nest.js', level: 55 },
      { name: 'REST APIs', level: 88 },
    ],
    Frontend: [
      { name: 'JavaScript', level: 72 },
      { name: 'Vue.js', level: 62 },
      { name: 'HTML5 / CSS3', level: 75 },
    ],
    Databases: [
      { name: 'MySQL', level: 84 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 60 },
      { name: 'Redis', level: 76 },
    ],
    'DevOps & Tools': [
      { name: 'Docker', level: 70 },
      { name: 'Git / GitHub', level: 86 },
      { name: 'Bitbucket', level: 72 },
      { name: 'GitLab', level: 70 },
      { name: 'Typesense', level: 70 },
      { name: 'Laravel Horizon', level: 82 },
      { name: 'Filament', level: 78 },
    ],
    Concepts: [
      { name: 'OOP & Design Patterns', level: 86 },
      { name: 'Data Structures & Algorithms', level: 78 },
      { name: 'WebSockets', level: 76 },
      { name: 'Concurrency & Caching', level: 72 },
      { name: 'Event-Driven Architecture', level: 82 },
    ],
  },
}