import React from 'react'
import { useState } from 'react'
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from '@/components/ProjectsNavbar'
import { projects as projectsData } from '@/data' 
import { Category } from '@/type'
const Projects = () => {

const [projects,setprojects]=useState(projectsData)
const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setprojects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setprojects(newArray);
    setActive(category);
  };






  return (
    <div className='px-5 py-2 overflow-y-scroll'style={{height:'65vh'}}>
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory}
        active={active}/>
    <div className='relative grid grid-cols-12 gap-4 my-3'>
    {
      projects.map(project=>(
        <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4 rounded-lg bg-gray-200 dark:bg-dark-200">
          <ProjectCard project={project} key={project.name}/>
        </div>
      ))}
     </div>
     </div>
    
  )
}

export default Projects