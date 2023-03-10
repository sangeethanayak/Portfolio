import {
    mobile,
    backend,
    creator,
    web,
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
    meta,
    starbucks,
    tesla,
    shopify,
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
      title: "Content Creator",
      icon: creator,
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
      name: "git Bash",
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
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
  
  export { services, skills, experiences, projects };