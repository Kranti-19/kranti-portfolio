export const profile = {
  name: 'Kranti Holkar',
  role: 'Full Stack Developer',
  location: 'Pune, India',
  email: 'krantimholkar@gmail.com',
  github: 'https://github.com/Kranti-19',
  linkedin: 'https://www.linkedin.com/in/kranti-holkar-39536240a/',
  resume: '/kranti-holkar-resume.pdf',
  tagline: 'I build fast, accessible web apps end to end.',
  bio: [
    'I am a Full Stack Developer who enjoys taking an idea from a rough sketch to a deployed product. Most of my work lives in the JavaScript ecosystem — React on the front end, Node.js and Express on the back end, with MongoDB or MySQL underneath.',
    'Alongside shipping features, I care about the fundamentals: data structures and algorithms, object-oriented design, and database concepts. That foundation is what makes the difference between code that works and code that keeps working.',
  ],
} as const

export const stats = [
  { label: 'Full stack projects shipped', value: '3+' },
  { label: 'Core languages', value: '3' },
  { label: 'Internship experience', value: '2 mo' },
] as const

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'Python'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Core CS Fundamentals',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
] as const

export const projects = [
  {
    title: 'AI-Powered Accommodation Booking Platform',
    blurb:
      'An Airbnb-inspired booking platform with a conversational AI search assistant that turns plain-language requests into personalized listing recommendations.',
    
    stack: ['Html', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', ],
    image: '/project-stayfinder.png',
    imageAlt:
      'Accommodation booking platform interface showing listing cards and an AI search assistant panel',
    repo: 'https://github.com/Kranti-19/Airbnb-clone',
    live: 'https://project-1xsr.onrender.com',
    featured: true,
  },
  {
    title: 'Criminal Record Management System',
    blurb:
      'A full-stack MERN application for securely managing criminal records with JWT authentication, image uploads, analytics dashboard, and complete CRUD functionality.',
    
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT'],
    image: '/project-criminal-records.png',
    imageAlt: 'Criminal Record Management System dashboard showing analytics and criminal record management',
    repo: 'https://github.com/Kranti-19/criminal-record-management-system',
    live: 'https://criminal-record-management-system-beta.vercel.app/',
    featured: true,
  },
  {
    title: 'Spotify Clone',
    blurb:
      'A responsive music streaming application featuring playlist browsing, custom audio playback controls, and persistent playback using LocalStorage.',
    
    stack: ['React.js', 'HTML5', 'CSS3', 'LocalStorage', 'HTML Audio API'],
    image: '/project-spotify-clone.png',
    imageAlt: 'Music streaming web app interface with album grid and now playing bar',
    repo: 'https://github.com/krantiholkar',
    live: 'https://spotify-clone-kranti-19s-projects.vercel.app/',
    featured: true,
  },
] as const

export const experience = [
  {
    company: 'Edunet Foundation',
    role: 'Full Stack Development Intern',
    period: 'Jan 2026 — Feb 2026',
    points: [
      'Built a full-stack accommodation booking platform inspired by Airbnb with AI-powered smart search functionality.',
      'Integrated a conversational AI-powered search assistant to deliver personalized listing recommendations, significantly improving user discovery and interface engagement.',
      'Successfully deployed and managed the application using the Render cloud platform.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
  },
] as const

export const education = [
  {
    degree: 'Bachelor of Engineering (Information Technology)',
    institute: 'Savitribai Phule Pune University',
    period: '2024 - 2027',
    score: 'Current CGPA: 9.14',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Software Engineering',
      'Web Development',
    ],
  },
  {
    degree: 'Diploma in Computer Science',
    institute: 'Maharashtra State Board of Technical Education (MSBTE)',
    period: '2022 - 2024',
    score: 'Percentage: 81.60%',
    coursework: [
      'Programming Fundamentals',
      'Java',
      'Database Systems',
      'Computer Networks',
    ],
  },
] as const