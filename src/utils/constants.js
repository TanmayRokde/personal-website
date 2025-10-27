import {  } from '../assets';
import classync from '../assets/projects/classync.jpg';
import mood from '../assets/projects/mood.jpg';
import tastytap from '../assets/projects/tastytap.jpg';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const skills = [
  {
    id: 1,
    skill_name: 'C++',
    Image: './assets/Cpp.png',
    width: 65,
    height: 65,
  },
  {
    id: 2,
    skill_name: 'SQL',
    Image: '../assets/sql.png',
    width: 65,
    height: 65,
  },
  {
    id: 3,
    skill_name: 'Javascript',
    Image: '../assets/js.png',
    width: 65,
    height: 65,
  },
  {
    id: 4,
    skill_name: 'Typescript',
    Image: '../assets/ts.png',
    width: 80,
    height: 80,
  },
  {
    id: 5,
    skill_name: 'Python',
    Image: '../assets/python.png',
    width: 65,
    height: 65,
  },
  {
    id: 6,
    skill_name: 'Html 5',
    Image: '../assets/html.png',
    width: 80,
    height: 80,
  },
  {
    id: 7,
    skill_name: 'CSS',
    Image: '../assets/css.png',
    width: 80,
    height: 80,
  },
  {
    id: 8,
    skill_name: 'Tailwind Css',
    Image: '../assets/tailwind.png',
    width: 80,
    height: 80,
  },
  {
    id: 9,
    skill_name: 'SCSS',
    Image: '../assets/scss.png',
    width: 80,
    height: 80,
  },
  {
    id: 10,
    skill_name: 'React',
    Image: '../assets/react.png',
    width: 80,
    height: 80,
  },
  {
    id: 11,
    skill_name: 'Redux',
    Image: '../assets/redux.png',
    width: 80,
    height: 80,
  },

  {
    id: 12,
    skill_name: 'NextJs',
    Image: '../assets/next.png',
    width: 80,
    height: 80,
  },
  {
    id: 13,
    skill_name: 'NodeJs',
    Image: '../assets/node-js.png',
    width: 80,
    height: 80,
  },
  {
    id: 14,
    skill_name: 'ExpressJs',
    Image: '../assets/express.png',
    width: 80,
    height: 80,
  },
  {
    id: 15,
    skill_name: 'Mongo db',
    Image: '../assets/mongodb.png',
    width: 40,
    height: 40,
  },
  {
    id: 16,
    skill_name: 'PostgerSQL',
    Image: '../assets/postger.png',
    width: 70,
    height: 70,
  },
  {
    id: 17,
    skill_name: 'MySQL',
    Image: './assets/mysql.png',
    width: 70,
    height: 70,
  },
  // {
  //   id: 18,
  //   skill_name: 'Firebase',
  //   Image: '../assets/Firebase.png',
  //   width: 55,
  //   height: 55,
  // },
  // {
  //   id: 19,
  //   skill_name: 'Prisma',
  //   Image: '../assets/prisma.webp',
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   id: 20,
  //   skill_name: 'Graphql',
  //   Image: '../assets/graphql.png',
  //   width: 80,
  //   height: 80,
  // },
  {
    id: 21,
    skill_name: 'AWS',
    Image: '../assets/aws.png',
    width: 70,
    height: 70,
  },
  // {
  //   id: 22,
  //   skill_name: 'Docker',
  //   Image: '../assets/docker.webp',
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   id: 23,
  //   skill_name: 'Kubernetes',
  //   Image: '../assets/docker.webp',
  //   width: 70,
  //   height: 70,
  // },

  // {
  //   skill_name: 'Material UI',
  //   Image: '../assets/mui.png',
  //   width: 80,
  //   height: 80,
  // },
];

export const experiences = [
  {
    title: "Backend and DevOps Engineer",
    icon: null,
    company_name: "Rydeu.com",
    date: "Nov 2024 – Present",
    points: [
      "Engineered scalable microservices using Node.js, TypeScript, and PostgreSQL to support supplier, customer, and admin panels.",
      "Implemented CI/CD pipelines and cron jobs to streamline deployments and automate recurring backend processes.",
      "Managed AWS infrastructure (SES, EC2, S3) and improved reliability of transactional email services.",
    ],
  },
  {
    title: "Backend Engineer",
    icon: null,
    company_name: "Sapphire",
    date: "Apr 2024 – Aug 2024",
    points: [
      "Developed and maintained backend systems supporting user analytics, reports, and product data pipelines.",
      "Built RESTful and event-driven microservices using Node.js, Express, and PostgreSQL for seamless data processing.",
      "Optimized database schemas and query performance, reducing response time by 35% across core modules.",
      "Collaborated with frontend and DevOps teams to ensure smooth deployment and monitoring across environments.",
    ],
  },
  {
    title: "Software Developer Intern",
    icon: null,
    company_name: "degenFund",
    date: "Aug 2024 – Nov 2024",
    points: [
      "Developed real-time backend services using Node.js and WebSockets to monitor blockchain events and DeFi token analytics.",
      "Built RESTful APIs and socket layers for frontend dashboards to deliver live token metrics and price updates.",
      "Integrated Web3.js with smart contracts for on-chain data fetching including token prices, transfers, and liquidity pools.",
    ],
  },
  {
    title: "Software Developer Intern",
    icon: null,
    company_name: "Spotflock",
    date: "Jul 2022 – Nov 2022",
    points: [
      "Developed and maintained Django admin dashboards to manage analytics and user control interfaces.",
      "Integrated frontend templates with backend views ensuring secure API handling and robust user data management.",
      "Optimized PostgreSQL queries via Django ORM to reduce response time and improve system performance.",
    ],
  },
];

export const projects = [
  {
    title: 'Classync',
    desc: 'Scalable Automated Academic Management Platform',
    github_url: 'https://github.com/ProjectStreamline/classync',
    live_url: 'https://classync.onrender.com/',
    image: classync,
    points: [
      'Designed ERP system with portals for students, faculty and advisors streamlining registration, attendance and grading.',
      'Implemented faculty tools for creating evaluations, managing attendance, setting grade cutoffs, and automating CGPA calculations, with graphical insights into 100% student performance data.',
      'Developed faculty advisor features like course creation, backlog management, floating registration forms, and student communication through notices, improving workflow efficiency by 40%.',
    ],
  },
  {
    title: 'Mood',
    desc: 'AI Journaling App',
    github_url: 'https://github.com/pradnyaakumbhar/mood',
    live_url: 'https://mood-beige.vercel.app/',
    image: mood,
    points: [
      'Built a journaling app allowing users to write daily entries and receive AI-driven insights such as summaries, mood evaluations, and tone analysis.',
      'Developed a graph-based history feature to visualize mood trends, enabling users to track emotional patterns and improve self-awareness.',
      ' Integrated OpenAI’s API for natural language processing, analyzing user entries and providing feedback on mood and tone, enhancing user insights by 40%.',
    ],
  },
  {
    title: 'TastyTap',
    desc: 'Food Ordering Platform',
    github_url: 'https://github.com/pradnyaakumbhar/TastyTap-frontend',
    github_url2: 'https://github.com/pradnyaakumbhar/TastyTap-backend',
    live_url: 'https://tastytap-frontend.onrender.com/',
    image: tastytap,
    points: [
      'Built a food ordering and restaurant management platform, allowing restaurants manage menu items and prices while facilitating daily orders from users.',
      'Designed a scalable system with pagination, search, filtering, and sorting and improving user experience',
      'Optimized client-server communication using RESTful APIs, reducing response times by 30%',
    ],
  },
];
