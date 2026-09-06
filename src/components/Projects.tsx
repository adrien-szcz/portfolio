import { projectsData } from "../utils/projectsData";
import Project from "./Project";

const Projects: React.FC = () => {


    return (
        <div>
            {/* <div className="flex justify-center flex-wrap gap-8 m-8">
                {Object.values(Technology)
                .map((tech) => (
                    <button
                        className={`
                            rounded-2xl border border-transparent p-5 w-[15%] shadow-md hover:cursor-pointer
                            transition-all duration-300 ${ technology === tech ? 'bg-accent-bg' : 'bg-soft-bg border-transparent hover:border-accent-border'}
                        `}
                        onClick={() => setTechnology(tech)}
                    >
                        {TechnologyTitle[tech]}
                    </button>
                ))}

            </div> */}

            <div className="flex flex-wrap justify-center mt-5 gap-15">
                {projectsData
                //.filter((project) => )
                .map((project) => (
                    <Project name={project.name} image={project.image} description={project.description} skillsName={project.skillsName} date={project.date}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;