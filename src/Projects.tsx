import Cards from "./Cards.tsx";
import project1 from './assets/FireShot Capture 018 - Vite + React - react-movie-app-five-liard.vercel.app.png'
import project2 from './assets/FireShot Capture 019 - Vite + React - react-recipe-app-sooty.vercel.app.png'
import projct3 from './assets/FireShot Capture 016 - Vite + React - react-todo-three-nu.vercel.app.png'
import project4 from './assets/FireShot Capture 020 - Vite + React + TS - localhost.png'


function Projects() {

  const projects = [
    {
      id: 1,
      title: "Movie Website",
      image:project1,
      description:
        "A responsive movie discovery platform using TMDB API. Features include search functionality, dynamic routing with React Router, and a sleek design powered by Tailwind CSS.",
      tech: [
        { id: 1, name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { id: 2, name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { id: 3, name: "Vite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
        { id: 4, name: "Router", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" },
      ],
      links: [
        { live: "https://react-movie-app-five-liard.vercel.app/" },
        { github: "https://github.com/ved17-git/React-Movie-App" }
      ]
    },
    {
      id: 2,
      title: "Recipe App",
      image:
        project2,
      description: "A recipe search and discovery app that allows users to explore meals from various cuisines. Built with React and Tailwind CSS, featuring a user-friendly interface and dynamic routing.",
      tech: [
        { id: 1, name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { id: 2, name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { id: 3, name: "Vite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
        { id: 4, name: "Router", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" },
      ],
      links: [
        { live: "https://react-recipe-app-sooty.vercel.app/" },
        { github: "https://github.com/ved17-git/React-Recipe-App" }
      ]
    },
    {
      id: 3,
      title: "Todo-List",
      image:projct3,
      description: "A simple and efficient task management app to organize daily tasks. Developed with React and Vite for fast performance and minimal design.",
      tech: [
        { id: 1, name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { id: 2, name: "Vite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
      ],
      links: [
        { live: "https://react-todo-three-nu.vercel.app/" },
        { github: "https://github.com/ved17-git/React-Todo" }
      ]
    },

    {
      id: 4,
      title: "Portfolio",
      image:project4,
      description: "A personal portfolio website showcasing projects and skills. Built with Next.js and TypeScript, designed for fast loading and seamless user experience.",
      tech: [
        { id: 1, name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { id: 2, name: "Typescript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      ],
      links: [
        { live: "https://portoflio-react.netlify.app/" },
        { github: "https://github.com/ved17-git/react-portfolio" }
      ]
    },
    // Add more projects as needed
  ];
  

  return (
    <>
    
    <h1 className="text-center mt-[20vh] sm:mt-[15vh] font-title text-6xl sm:text-3xl mb-10 " id="projects">Projects</h1>
   <div className="grid grid-cols-2 gap-10 sm:grid-cols-1 px-[28vh] w-full lg:px-[6vh] md:gap-5 md:px-[1vh] sm:px-[4vh] sm:pt-4 sm:mt-[-4vh]">
      {projects.map((project) => (
        <Cards
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          tech={project.tech}
          links={project.links}
        />
      ))}
    </div>
  
    </>
  );
}

export default Projects;

