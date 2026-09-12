import { useState } from "react";
import Skill from "./Skill";
import { Technology } from "../../utils/enums";
import { skillsData } from "../../data/skillsData";

const Skills: React.FC = () => {

	const [technology, setTechnology] = useState<Technology>(Technology.SoftwareDevelopment);

	return (
		<div>

			<div className="flex justify-center flex-wrap m-8 gap-4 md:gap-6">
				{Object.values(Technology)
					.map((tech) => (
						<button
						key={tech}
							className={`
								rounded-2xl border border-transparent 
								p-5 text-xs shadow-md 
								md:w-[30%] lg:w-[15%] md:text-base 
								hover:cursor-pointer hover:scale-105 
								transition-all duration-300 
								${technology === tech ?
									'bg-accent-bg' :
									'bg-soft-bg hover:inset-ring-2 hover:inset-ring-accent-border'}
							`}
							onClick={() => setTechnology(tech)}
						>
							{tech}
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