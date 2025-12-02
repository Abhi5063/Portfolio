import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Springer Capital",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A highly skilled React.js developer who consistently delivers clean, efficient, and reliable frontend solutions.",
    name: "Neha Patel",
    designation: "Manager",
    company: "Springer Capital",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH753eTBJWocw/profile-displayphoto-scale_400_400/B56ZjmJF9sHIAk-/0/1756207802828?e=1766016000&v=beta&t=mWIdcBswDiPfkwTs99doLkIoocGTtYNs_FlCqfEipQQ",
  },
  {
    testimonial:
      "A dependable team contributor who takes ownership and builds well-architected, maintainable React components.",
    name: "Venu Gopal Boga",
    designation: "Team Lead",
    company: "Springer Capital",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQE0M8mz5ET7ig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721790791268?e=1766016000&v=beta&t=CxPgQFxPjTdtWzb3FBnam02iOe67tiFbHLuQGsO-Sx8",
  },
  {
    testimonial:
      "A strong problem-solver who improves performance, enhances user experience, and elevates overall product quality.",
    name: "Jenny Birch",
    designation: "HR",
    company: "Springer Capital",
    image:
      "https://media.istockphoto.com/id/2014684899/vector/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face.jpg?s=612x612&w=0&k=20&c=D-dk9ek0_jb19TiMVNVmlpvYVrQiFiJmgGmiLB5yE4w=",
  },
];

const projects = [
  {
    name: "TaskFlow",
    description:
      "TaskFlow is a full-stack MERN application that helps users organize, prioritize, and manage their daily tasks efficiently. It offers a clean workflow, intuitive UI, and strong backend architecture to deliver a seamless task management experience across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Abhi5063/TaskFlow",
  },
  {
    name: "LinkTalk",
    description:
      "The Real-Time Chat Application is a full-stack messaging platform designed to deliver instant communication between users. It provides seamless chat functionality, real-time updates, and a smooth user experience across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Abhi5063/LinkTalk",
  },
  {
    name: "Inventory Management Dashboard",
    description:
      "A comprehensive full-stack application designed to help users manage product inventories efficiently. It offers a highly interactive UI, real-time data insights, and powerful backend management features to streamline business operations.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/Abhi5063/Inventory-Management-Dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
