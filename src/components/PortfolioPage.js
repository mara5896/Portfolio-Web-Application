import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Header from "./Header";

export default function PortfolioPage() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      // title: "Project One",
      details: "Description for project one",
      // image: "/img/project1.png"
    },
    {
      id: 2,
      // title: "Project Two",
      details: "Description for project two",
      // image: "/img/project2.png"
    },
    {
      id: 3,
      // title: "Project Three",
      details: "Description for project three",
      // image: "/img/project3.png"
    },
  ]);

  return (
    <main>
      <Header />

      <section className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            // key={project.id}
            // title={project.title}
            // description={project.description}
            // image={project.image}
          />
        ))}
      </section>
<button className="addPortCard"
  onClick={() => {
    const newId = projects.length > 0 
      ? Math.max(...projects.map(p => p.id)) + 1 
      : 1;
    
    setProjects([
      ...projects,
      {
        id: newId,
        title: `Project ${newId}`,
        image: "/img/default.png",
        details: `New dynamic project ${newId} details here!` 
      }
    ]);
  }}
>
  +
</button>
 <button className="deletePortCard"
  onClick={() => {
    if (projects.length > 0) {
      setProjects(projects.slice(0, -1));
    }
  }}
>
  -
</button> 
    </main>
  );
}
// 
