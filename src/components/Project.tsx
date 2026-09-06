import type { ProjectInfos } from '../utils/type';

const Project: React.FC<ProjectInfos> = (props) => {
  return (
    <div className="
      border-2 border-border rounded-md bg-soft-bg w-[90%] md:w-[70%] mx-auto flex flex-col 
      md:flex-row overflow-hidden shadow-xl shadow-social-bg hover:shadow-accent-bg
      transition-all duration-200"
    >
      
      <div className="w-full md:w-2/5 h-48 md:h-auto md:min-h-60">
        <img
          src={props.image}
          alt="application / software illustration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-xl font-bold">
          {props.name}
        </h2>

        <div className="text-[105%] mx-3 mb-4 *:mt-6">
          {props.description}
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-auto">
          <div className="flex flex-wrap gap-2">
            {props.skillsName.map((skill) => (
              <span
                key={skill}
                className="
                  mt-2 ml-1 px-2 py-1 rounded bg-social-bg text-sm
                  hover:text-text-heading hover:scale-105
                  transition-all duration-150
                "
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="ml-auto mt-5 text-sm text-text opacity-70">
            {props.date}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Project;