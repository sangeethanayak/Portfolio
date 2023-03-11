import {
    javascript,
    html,
    css,
    cpp,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    matlab,
    git,
    canva,
    cadence,
    ps,
    figma,
    python,
    github1,
    nitte,
    joseph,
    canara,
    codebox,
    gps,
    billing,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const skills = [
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
      name: "C / C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Matlab",
      icon: matlab,
    },
    {
      name: "Cadence",
      icon: cadence,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "GitHub",
      icon: github1,
    },
    {
      name: "Canva",
      icon: canva,
    },
    {
      name: "Photoshop",
      icon: ps,
    },
    

  ];
  
  const education = [
    {
      title: "Undergraduation",
      university_name: "N.M.A.M. Institute of Technology, Nitte",
      icon: nitte,
      iconBg: "white",
      date: "October 2020 - Present",
      points: [
        "Pursuing Bachelor's degree in Electronics and Communication Engineering",
        "Current CGPA: 8.46/10",
      ],
    },
    {
      title: "Pre-University Education",
      university_name: "Canara Pre-University College, Mangaluru",
      icon: canara,
      iconBg: "white",
      date: "May 2018 - July 2020",
      points: [
        "Completed two years of pre-university education with PCMB major",
        "Aggregate percentage: 92.66%",
      ],
    },
    {
      title: "Secondary Education",
      university_name: "St. Joseph's Junior College, Bajpe",
      icon: joseph,
      iconBg: "white",
      date: "May 2015 - April - 2018",
      points: [
        "Completed Secondary education with Science and Mathematics as major.", 
        "Aggregate percentage: 96.48%",
      ],
    },
  ];
  
  const projects = [
    {
      name: "CodeBox",
      description:
        "An web based tool built using JavaScript and OpenAI API, with more than a dozen programming languages under its belt. CodeBox is now capable of understanding straightforward user requests in natural language and carrying them out on the user's behalf.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
      ],
      image: codebox,
      source_code_link: "https://github.com/sangeethanayak/CodeBox",
    },
    {
      name: "8051 microcontroller-GPS interface",
      description:
        "The GPS receiver is used to get accurate geographical location by receiving information from satellites. The GPS receiver gives output serially in form of strings. These strings are received serially by 8051 microcontroller. This information is displayed using LCD in a proper format.",
      tags: [
        {
          name: "EmbeddedC",
          color: "green-text-gradient",
        },
      ],
      image: gps,
      source_code_link: "https://github.com/sangeethanayak/GPS-8051_interface",
    },
    {
      name: "Billing System",
      description:
        "A Supermarket billing system built using the OOP concepts of C++, file handling and CRUD operations. ",
      tags: [
        {
          name: "C++",
          color: "pink-text-gradient",
        },
      ],
      image: billing,
      source_code_link: "https://github.com/sangeethanayak/Billing-System",
    },
  ];
  
  export { skills, education, projects };