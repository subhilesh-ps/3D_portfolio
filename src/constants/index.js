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
  meta,
  starbucks,
  tesla,
  shopify,
  movieapp,
  fitness,
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
    title: "Reactjs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "Expressjs",
    icon: reactjs,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer (MERN) Internship",
    company_name: "EDURE - TRIVANDRUM - INDIA",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2023 – present",
    points: [
      "•Collaborated with senior developers to design and implement dynamic webapplications using Reactjs.",

      "Developed responsive applications ensuring compatibility across devices and browsers.",
      "•Integrated third-party APIs to enhance functionality and implemented backend solutions using Node.js, Express.js, and MongoDB.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Portfolio Manager",
    company_name: "Client Advisory Financial Solutions, Chennai, India",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " Jul 2022 – jun 2023",
    points: ["Managed a portfolio of high-value clients, providing financial advice and solutions."],
  },
  {
    title: "Team Leader",
    company_name: "Cedar Business Solutions, Chennai, India",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2020 - Dec 2021",
    points: [
      "•Led a team of sales professionals, driving business growth through strategic planning and team management.",
    ],
  },
  {
    title: "Customer Support Executive",
    company_name: "M1 Market Soft, Chennai, India",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Mar 2019 – Sept 2020",
    points: ["dealing with client an queries and resolving them in a timely manner an selling company products."],
  },
  {
    title: "Internship In Android",
    company_name: "Baabte System Solution- Calicut -INDIA",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sept 2017 – Oct 2017",
    points: [
      "Developed Android apps using Web Services (Volley), SQLite for data storage, andGoogle Maps API.",

      "•Designed interactive user interfaces using RecyclerView and CardView.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Movie App",
    description:
      "I created an IMDb clone movie app that allows users to explore, search, and rate movies. The app features a dynamic user interface with movie posters, trailers, and detailed descriptions. It includes user reviews, ratings, and genre-based categorization for easy navigation. The backend is powered by a robust database, ensuring fast and seamless data retrieval. It provides a near-authentic IMDb-like experience for movie enthusiasts.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Api integration",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://github.com/subhilesh-ps/Movie_App",
    app_view_link: "https://app.netlify.com/sites/sb-movie-app/overview",
  },
  {
    name: "Fitness_Nut",
    description:
      "I developed Fitness Nut, a full-stack MERN app for tracking gym workouts and fitness goals. Users can log exercises, monitor progress, and set goals with an intuitive and responsive interface. The app features personalized dashboards, It seamlessly integrates MongoDB, Express, React, and Node.js for a smooth user experience. Fitness Nut empowers users to stay consistent and achieve their fitness milestones effectively.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "yellow",
      },
      {
        name: "Express",
        color: "blue",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/subhilesh-ps/FITNESS-NUT",
    app_view_link: "https://app.netlify.com/sites/fitnesnut/overview",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
