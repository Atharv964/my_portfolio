// export const projectsData = [
//   {
//     id: 1,
//     title: 'Portfolio Website',
//     description: 'A personal portfolio showcasing my work, skills, and experience. Built with React and Vite.',
//     technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
//     github: 'https://github.com',
//     liveDemo: 'https://example.com'
//   },
//   {
//     id: 2,
//     title: 'Full Stack Web Application',
//     description: 'A complete web application with frontend and backend components.',
//     technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
//     github: 'https://github.com',
//     liveDemo: 'https://example.com'
//   }, 
//   {
//     id: 3,
//     title: 'E-commerce Platform',
//     description: 'An e-commerce platform with product listing, cart, and checkout features.',
//     technologies: ['React', 'JavaScript', 'REST API', 'CSS'],
//     github: 'https://github.com',
//     liveDemo: 'https://example.com'
//   }
// ];

import miniDmartImage from "../assets/projects/mini-dmart.png";
import phishguardImage from "../assets/projects/phishingAi.png";
import todoImage from "../assets/projects/todo.png";
import quizImage from "../assets/projects/quiz.png";

export const projectsData = [
  {
    id: 1,
    title: 'Mini D-Mart',
    description:
      'A full-stack e-commerce application with product browsing, authentication, cart management, and role-based access for users and admins.',
    technologies: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT'
    ],
    image: miniDmartImage,
    github: 'https://github.com/Atharv964/Mini-DMart',
    liveDemo: 'https://mini-dmart-frontend-0osf.onrender.com'
  },

  {
    id: 2,
    title: 'PhishGuard AI',
    description:
      'A phishing website detection system that combines BERT-based URL representations with handcrafted features to identify potentially malicious URLs.',
    technologies: [
      'Python',
      'BERT',
      'Machine Learning',
      'NLP',
      'Flask',
      'JavaScript'
    ],
    image: phishguardImage,
    github: 'https://github.com/Atharv964/phishing-detection-bert'
  },

  {
    id: 3,
    title: 'To-Do List',
    description:
      'A lightweight task management application that lets users create, manage, and persist tasks directly in the browser using LocalStorage.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'LocalStorage'
    ],
    image: todoImage,
    github: 'https://github.com/Atharv964/Todo-React',
    liveDemo: 'https://atharv964.github.io/Todo-React/'
  },

  {
    id: 4,
    title: 'Quiz App',
    description:
      'An interactive quiz application designed to provide a simple and engaging way to answer questions and track quiz progress.',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'CSS'
    ],
    image: quizImage,
    github: 'https://github.com/Atharv964/quiz',
    liveDemo: 'https://quiz-tau-amber.vercel.app'
  }
];

