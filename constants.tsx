
import React from 'react';
import project1 from "./assets/projects/project1.png";
import project2 from "./assets/projects/project2.png";
import project3 from "./assets/projects/project3.jpg";
import project4 from "./assets/projects/project4.jpg";
import { NavItem, Project, Certification } from './types';
import { 
  Code2, 
  Server, 
  Database, 
  Globe, 
  ShieldCheck, 
  Wrench, 
  Cloud, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Terminal,
  Layers,
  Zap,
  Cpu
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Diwali Crackers Management System',
    description: "The Diwali Crackers Management System is a web-based application designed to manage and organize the sale and inventory of firecrackers during the Diwali festival. The system helps streamline product listing, stock tracking, and order management in a simple and user-friendly way.\n\nThis project provides an efficient solution for small shops or vendors to maintain cracker details such as product name, category, price, and availability. Users can view available crackers, while the system ensures accurate inventory updates using a lightweight database.",              
    image: project1,
    tags: ['HTML', 'CSS', 'Javascript',"Bootstrap", "SQL",'Vercel'],
    liveLink: 'https://diwali-crackers-management-system.vercel.app/',
    githubLink: 'https://github.com/Nandhangit/Diwali-Crackers-Management-System.git',
    
  },
  {
    title: 'Social Network-Api-drf',
    description: 'Social Network API – DRF is a backend web application built using Django Rest Framework that provides core social networking functionalities through secure and scalable RESTful APIs.\n\nThe project enables users to register, authenticate, search other users, send and manage friend requests, and maintain social connections in a controlled and secure manner. Authentication is implemented using JWT (JSON Web Tokens) to ensure stateless, token-based access to protected endpoints.\n\nThe system includes rate limiting to prevent abuse (restricting users to a maximum of three friend requests per minute), ensuring fairness and performance. All sensitive APIs are protected using authentication and authorization mechanisms, following industry best practices.',
    image: project2,
    tags:['Python', 'Django', 'Sqlite',"Postman","Django-JWT","DRF"],
    githubLink: 'https://github.com/Nandhangit/social-network-api-drf.git'
  },
  {
    title: 'Edutrack Academic - Role Based Work flow',
    description: 'EduTrack is a web-based application designed to digitize, manage, and streamline academic records while enforcing role-based workflows within an educational institution. The system centralizes student data, academic performance, and administrative processes, reducing manual effort and improving data accuracy and transparency.\n\nThe platform supports multiple user roles—such as Admin, Faculty, and Students—each with clearly defined permissions and responsibilities. By implementing role-based access control (RBAC), EduTrack ensures that users can only access and modify information relevant to their role, enhancing both security and accountability.',
    image: project3,
    tags: ['Django', 'MySQL', "Postman","Rest API","Django-JWT"],
    githubLink: 'https://github.com/Nandhangit/edutrack-academic-workflow.git'
  },
  {
    title: 'Library Management System',
    description: 'The Library Management System is a web-based application designed to simplify and automate library operations such as book management and user interactions. The system helps organize library resources efficiently by maintaining records of books, availability, and basic transactions.\n\nThe system focuses on improving efficiency, reducing manual record-keeping, and providing an easy-to-use solution suitable for small libraries or academic projects. It demonstrates strong frontend development skills, including UI design, client-side logic, and data handling.',
    image: project4,
    tags: ['HTML', 'CSS', 'Javascript',"Bootstrap"],
    // badges: ['AI-Powered', 'Building']
    liveLink: 'https://nandhan-project.vercel.app/',
    githubLink: 'https://github.com/Nandhangit/Library-Management-System'
  },
  
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Python',
    provider: 'Guvi / Google',
    date: 'Aug 2023',
    skills: ['Python', 'Django', 'Flask'],
    link: '/certifications/Python_Certification.jpg',
    type: 'Simulation'
  },
  {
    title: 'SQL Certification',
    provider: 'Hacker Rank',
    date: 'Nov 2025',
    skills: ['SQL', 'MySQL'],
    link: "/certifications/Sql_Certification.jpg",
    type: 'Simulation'
  },
  {
    title: 'Solutions	Architecture	Job	Simulation',
    provider: 'AWS',
    date: 'Jun 2025',
    skills: ['Cloud Computing Concepts', 'Scalable System Architecture', 'Web Hosting Architecture'],
    link: '/certifications/Aws_Certification.jpg',
    type: 'Course'
  }
];

export const SKILLS = [
  {
    category: 'Backend',
    icon: <Server className="w-5 h-5" />,
    items: ['Python', 'Django', 'Django REST Framework', "Flask"]
  },
  {
    category: 'Frontend',
    icon: <Globe className="w-5 h-5" />,
    items: ['HTML5', 'CSS3', 'Bootstrap',"Javascript"]
  },
  {
    category: 'Database',
    icon: <Database className="w-5 h-5" />,
    items: ['MySQL', "SQLite"]
  },
  {
    category: 'APIs & Protocols',
    icon: <ShieldCheck className="w-5 h-5" />,
    items: ['REST APIs', 'JWT Authentication', 'API Documentation']
  },
  {
    category: 'Tools',
    icon: <Wrench className="w-5 h-5" />,
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'PyCharm',"Google colab"]
  },
  {
    category: 'Deployment',
    icon: <Cloud className="w-5 h-5" />,
    items: ['Railway', 'Render', 'Cloud Platforms',"Vercel"]
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Nandhangit',
  linkedin: 'https://www.linkedin.com/in/nandhans/',
  email: 'mailto:snandhan825@gmail.com',
  resume: '/resume/Nandhan_Resume.pdf'


};
