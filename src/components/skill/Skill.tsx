import type { SkillNameAndIcon } from "../../utils/types";

const Skill: React.FC<SkillNameAndIcon> = (props) => {

  return (
    <div key= {props.name} className='
      rounded-xl shadow-md shadow-social-bg
      flex flex-col items-center p-4 bg-soft-bg 
      w-[15%] min-w-32 transition-all duration-200 
      hover:-translate-y-1
      animate-fade-scale'
    >
      <i className={`${props.icon} text-4xl mb-2`}></i>

      <p>{props.name}</p>
    </div>
  );
};

export default Skill;