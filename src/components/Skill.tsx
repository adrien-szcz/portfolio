import type { SkillNameAndIcon } from '../utils/type'

const Skill: React.FC<SkillNameAndIcon> = (props) => {

  return (
    <div className="border rounded-xl p-4 flex flex-col bg-soft-bg w-[15%] min-w-32 items-center shadow-md shadow-accent-bg hover:border-accent-border">
      <i className={`${props.icon} text-4xl mb-2`}></i>

      <p>{props.name}</p>
    </div>
  );
};

export default Skill;