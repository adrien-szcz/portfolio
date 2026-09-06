import type { ReactNode } from "react";

export enum Technology {
  Programming = 'programming',
  Web = 'web',
  Database = 'database',
  Others = 'others',
}

export enum TechnologyTitle {
  programming = 'Programming Languages',
  web = 'Web technologies',
  database = 'Data Technologies',
  others = 'Others',
}


export type SkillInfos = {
  name: string;
  icon: string;
  technology: Technology;
};

export type SkillNameAndIcon = {
  name: string;
  icon: string;
};

export type ProjectInfos = {
  name: string;
  image: string;
  description: ReactNode;
  skillsName: string[];
};