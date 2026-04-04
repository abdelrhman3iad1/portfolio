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
      'Highly motivated computer science graduate seeking a Backend Engineering position to apply and expand expertise in building and deploying scalable software solutions. Strong foundation in computer science and backend development, with a passion for learning and contributing to a dynamic team environment.',
  },

  experience: [
    {
      id: 1,
      role: 'PHP Laravel Backend Developer',
      company: 'Bevatel',
      project: 'AL-Otolat Project',
      period: 'October 2025 – Present',
      current: true,
      bullets: [
        'Implemented real-time price drop detection using background processing (Laravel Horizon + Redis queues) and live frontend updates via WebSockets (Laravel Reverb)',
        'Built fast hotel autocomplete powered by Typesense full-text search engine',
        'Contributed to internal operations dashboard using Filament admin panel',
        'Implemented conflict-free registration supporting both email and mobile verification with OTP-based flow and data encryption',
        'Wrote feature and unit tests covering authentication flows',
        'Diagnosed production/staging issues, optimized third-party API consumption and quota usage, significantly improving system performance',
        'Collaborated daily with frontend, mobile, and QA teams in a full-stack delivery environment',
      ],
      stack: ['PHP', 'Laravel', 'Horizon', 'Filament', 'PostgreSQL', 'Redis', 'WebSockets', 'Reverb', 'Typesense', 'Docker'],
    },
    {
      id: 2,
      role: 'PHP Laravel Backend Developer',
      company: 'Smart WOW',
      project: null,
      period: 'January 2025 – July 2025',
      current: false,
      bullets: [
        'Contributed to a SaaS HMVC Module Based platform for Flights Booking using several suppliers',
        'Handled full cycle of coupons, currencies, companies, wallet system, and markups modules',
        'Contributed to Super Admin Dashboard using Vue.js, implementing CRUD operations across several modules',
      ],
      stack: ['PHP', 'Laravel', 'Vue.js', 'SaaS', 'HMVC'],
    },
    {
      id: 3,
      role: 'PHP Laravel Developer',
      company: 'PeaCode',
      project: 'Internship',
      period: 'August 2024 – November 2024',
      current: false,
      bullets: [
        'Collaborated on a Sports Tracking Application integrating third-party APIs',
        'Built and optimized features including live scores, calendar fixtures and competition timing',
        'Implemented authentication cycle with OTP using emails',
      ],
      stack: ['PHP', 'Laravel', 'Third-Party APIs', 'OTP Auth'],
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
        'Fully event-driven system with instant in-app notifications inside Filament SPA, high-performance background processing, and Laravel Octane for minimal request boot time.',
      stack: ['Laravel 12', 'PostgreSQL', 'Reverb', 'Echo', 'Horizon', 'Redis', 'Octane', 'OpenSwoole', 'Filament'],
      link: 'https://github.com/abdelrhman3iad1',
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
        'Full-featured LMS with repository-service design pattern, JWT authentication, and roles & permissions authorization system.',
      stack: ['Laravel 12', 'MySQL', 'JWT', 'RBAC'],
      link: 'https://github.com/abdelrhman3iad1',
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
      name: 'E-Commerce RESTful APIs',
      description:
        'Complete e-commerce backend with cart and order management, product management, recommendation search, and a Blade MVC dashboard.',
      stack: ['Laravel 11', 'MySQL', 'REST API', 'Blade'],
      link: 'https://github.com/abdelrhman3iad1',
      highlights: [
        'Cart and Order Management',
        'Product Management',
        'Recommendation Search',
        'Blade MVC Dashboard',
      ],
      featured: false,
    },
    {
      id: 4,
      name: 'E-Commerce Console App',
      description:
        'Java console application demonstrating OOP principles — Inheritance, Encapsulation, Polymorphism, and Abstraction.',
      stack: ['Java', 'OOP'],
      link: 'https://github.com/abdelrhman3iad1',
      highlights: ['OOP Principles applied throughout', 'Clean architecture'],
      featured: false,
    },
    {
      id: 5,
      name: 'Simple CRUD RESTful API',
      description:
        'A lightweight RESTful API built with Express.js and MongoDB demonstrating Node.js backend fundamentals.',
      stack: ['Express.js', 'MongoDB', 'Node.js', 'REST API'],
      link: 'https://github.com/abdelrhman3iad1',
      highlights: ['Full CRUD operations', 'RESTful conventions'],
      featured: false,
    },
  ],

  skills: {
    Backend: [
      { name: 'PHP', level: 90 },
      { name: 'Laravel', level: 92 },
      { name: 'Node.js', level: 65 },
      { name: 'Express.js', level: 60 },
      { name: 'REST APIs', level: 88 },
    ],
    Frontend: [
      { name: 'JavaScript', level: 72 },
      { name: 'Vue.js', level: 60 },
      { name: 'HTML5 / CSS3', level: 75 },
    ],
    Databases: [
      { name: 'MySQL', level: 82 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 60 },
      { name: 'Redis', level: 75 },
    ],
    'DevOps & Tools': [
      { name: 'Docker', level: 68 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'Typesense', level: 70 },
      { name: 'Laravel Horizon', level: 80 },
      { name: 'Filament', level: 75 },
    ],
    Concepts: [
      { name: 'OOP & Design Patterns', level: 85 },
      { name: 'Data Structures', level: 78 },
      { name: 'WebSockets', level: 72 },
      { name: 'Event-Driven Architecture', level: 80 },
    ],
  },
}
