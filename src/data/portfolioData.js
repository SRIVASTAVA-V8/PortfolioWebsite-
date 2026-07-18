export const personalInfo = {
  name: 'Vaibhavi Srivastava',
  role: ['Software Developer', 'Full Stack Engineer', 'Problem Solver'],
  email: 'srivastava.vaibhavi17@gmail.com',
  location: 'Pune, India',
  experience: '1+ Years',
  availability: 'Open for opportunities',
  bio: "I'm a passionate software developer with expertise in building exceptional digital experiences. I specialize in React, Node.js, and cloud technologies, turning complex problems into elegant solutions.",
//   stats: [
//     { number: '4+', label: 'Years Experience' },
//     { number: '30+', label: 'Projects Completed' },
//     { number: '15+', label: 'Happy Clients' }
//   ]
};

export const skills = {
  frontend: [
    { name: 'React.js', level: 80, icon: '⚛️' },
    // { name: 'Next.js', level: 85, icon: '▲' },
    { name: 'TypeScript', level: 85, icon: '📘' },
    { name: 'Tailwind CSS', level: 88, icon: '🎨' },
    { name: 'Angular.js', level: 90, icon: '🟢' },
    { name: 'JavaScript.js', level: 80, icon: '🟢' },
    {name:'Bootstrap', level: 90, icon: '🅱️'}
  ],
  backend: [
    { name: 'Node.js', level: 88, icon: '🟢' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Express.js', level: 87, icon: '🚀' },
    { name: 'SQL', level: 82, icon: '🐘' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'Java', level: 80, icon: '☕' }
  ],
  tools: [
    { name: 'Git/GitHub', level: 90, icon: '📦' },
    { name: 'Docker', level: 78, icon: '🐳' },
    { name: 'AWS', level: 75, icon: '☁️' },
    // { name: 'Jenkins', level: 70, icon: '🔧' },
    // { name: 'Figma', level: 80, icon: '🎨' }
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
    liveLink: '#',
    githubLink: '#',
    features: ['User auth', 'Payment gateway', 'Admin panel', 'Order tracking','inventory management', 'product reviews']
  },
  {
    id: 2,
    title: 'Project Management System',
    description: 'A production-ready MEAN stack platform designed for software teams. It integrates agile workflows (sprints & Kanban), RBAC security, real-time collaboration.',
    tech: ['Angular.js', 'Bootstrap', 'Node.js', 'MongoDb', 'chart.js'],
    image: '✅',
    category: 'fullstack',
    liveLink: '#',
    githubLink: '#',
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
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
    image: '🌤️',
    category: 'fullstack',
    liveLink: '#',
    githubLink: '#',
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
//   {
//     id: 5,
//     title: 'AI Image Generator',
//     description: 'Generate unique images using AI with custom prompts and style options.',
//     tech: ['React', 'Python', 'TensorFlow', 'OpenAI API'],
//     image: '🎨',
//     category: 'fullstack',
//     liveLink: '#',
//     githubLink: '#',
//     features: ['AI generation', 'Style transfer', 'Image editing', 'Gallery']
//   },
//   {
//     id: 6,
//     title: 'Social Analytics Dashboard',
//     description: 'Real-time social media analytics with beautiful visualizations.',
//     tech: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
//     image: '📊',
//     category: 'frontend',
//     liveLink: '#',
//     githubLink: '#',
//     features: ['Analytics', 'Charts', 'Reports', 'Export data']
//   }
];