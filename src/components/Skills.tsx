import { useState } from "react";
import { skillsData } from "../utils/skillsData";
import { Technology, TechnologyTitle } from "../utils/type";
import Skill from "./Skill";

const Skills: React.FC = () => {

    const [technology, setTechnology] = useState<Technology>(Technology.Programming);

    return (
        <div>
            <div className="flex justify-center flex-wrap gap-4 md:gap-6 m-8">
                {Object.values(Technology)
                .map((tech) => (
                    <button
                        className={`
                            rounded-2xl border border-transparent p-5 md:w-[30%] lg:w-[15%] text-xs md:text-base shadow-md hover:cursor-pointer hover:scale-105 transition-all duration-300 
                            ${ technology === tech ? 'bg-accent-bg' : 'bg-soft-bg hover:inset-ring-2 hover:inset-ring-accent-border'}
                        `}
                        onClick={() => setTechnology(tech)}
                    >
                        {TechnologyTitle[tech]}
                    </button>
                ))}

            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {skillsData
                .filter((skill) => skill.technology === technology)
                .map((skill) => (
                    <Skill name={skill.name} icon={skill.icon}/>
                ))}
            </div>
        </div>
    );
};

export default Skills;