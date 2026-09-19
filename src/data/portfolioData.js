export const personalInfo = {
  name: 'Vaibhavi Srivastava',
  role: ['Software Developer', 'Full Stack Engineer', 'Problem Solver'],
  email: 'srivastava.vaibhavi17@gmail.com',
  location: 'Pune, India',
  experience: '1+ Years',
  availability: 'Open for opportunities',
  bio: "Software Engineer passionate about building modern, scalable web applications with the MEAN/MERN stack.",
};

export const skills = {
  frontend: [
    { name: 'React.js',  icon: 'R' },
    { name: 'TypeScript',  icon: 'TS' },
    { name: 'Tailwind CSS',  icon: 'TW' },
    { name: 'Angular',  icon: 'A' },
    { name: 'JavaScript',  icon: 'JS' },
    { name: 'Bootstrap',  icon: 'BS' }
  ],
  backend: [
    { name: 'Node.js',  icon: 'N' },
    { name: 'Python',  icon: 'PY' },
    { name: 'Express.js',  icon: 'E' },
    { name: 'SQL',  icon: 'SQL' },
    { name: 'MongoDB',  icon: 'M' },
    { name: 'Java',  icon: 'J' }
  ],
  tools: [
    { name: 'Git/GitHub',  icon: 'G' },
    {name:'VS Code',  icon: 'V'},
    { name: 'Postman',  icon: 'P' },
    {name : 'Agile/SDLC',  icon: 'A'},
  ]
};

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
    tech: ['Angular', 'Node.js', 'MongoDB', 'Razorpay', 'Redux'],
    image: '🛒',
    category: 'fullstack',
    liveLink: 'https://ink-quill-nu.vercel.app',
    githubLink: 'https://github.com/SRIVASTAVA-V8/Ink-Quill',
    features: ['User auth', 'Payment gateway', 'Admin panel', 'Order tracking','inventory management', 'product reviews']
  },
  {
    id: 2,
    title: 'Project Management System',
    description: 'A production-ready MEAN stack platform designed for software teams. It integrates agile workflows (sprints & Kanban), RBAC security, real-time collaboration.',
    tech: ['Angular.js', 'Bootstrap', 'Node.js', 'MongoDb', 'chart.js'],
    image: '✅',
    category: 'fullstack',
    liveLink: null,
    githubLink: null,
    badge: 'Internship Project',
    features: [
  'Role-based dashboards',
  'Kanban task management',
  'Subtask delegation',
  'Real-time analytics',
  'Proof-of-work uploads',
  'Feedback & approval workflow',
  'Task history tracking',
  'JWT authentication'
]
  },
  {
    id: 3,
    title: 'Internal Communications Hub',
    description: 'Developed an Internal Communications Hub with JWT-secured access, dynamic email builder, bulk recipient uploads, and audit history',
    tech: ['Angular.js', 'Node.js', 'Chart.js', 'MongoDB', 'JWT'],
    image: '📡',
    category: 'fullstack',
    liveLink: null,
    githubLink: null,
    badge: 'Internship Project',
    features:[
  'Department-based access control',
  'Drag-and-drop email builder',
  'Custom email templates',
  'Bulk recipient upload',
  'CSV/XLSX validation',
  'Email preview & confirmation',
  'Email audit history',
  'JWT authentication'
]
  },
  {
    id: 4,
    title: 'Book Recommendation Engine',
    description: 'AI-powered book recommendation system with personalized suggestions and collaborative filtering.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'NumPy', 'Pandas'],
    image: '�',
    category: 'backend',
    liveLink: '#',
    githubLink: '#',
    features: [
  'Collaborative filtering',
  'Book recommendations',
  'User similarity analysis',
  'Data preprocessing',
  'NumPy & Pandas',
  'Recommendation engine'
]
  },

];