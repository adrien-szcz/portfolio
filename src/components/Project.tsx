import type { ProjectInfos } from '../utils/type';

const Project: React.FC<ProjectInfos> = (props) => {

  return (
    <div className="border rounded-md bg-secondary-bg w-[75%] mx-auto flex flex-col md:flex-row">
      <img
        src={props.image}
        alt="application / software illustration"
        className="w-full md:w-2/5 h-auto"
      />

      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-xl font-bold">
          {props.name}
        </h2>

        <p className="mt-2">
          {props.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {props.skillsName.map((skill) => (
            <span
              key={skill}
              className="mt-2 px-2 py-1 rounded bg-soft-bg text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;