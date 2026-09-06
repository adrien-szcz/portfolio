export enum Technology {
  Programming = 'programming',
  Database = 'database',
  Web = 'web',
  Others = 'others',
}

export enum TechnologyTitle {
  programming = 'Programming Languages',
  database = 'Data Technologies',
  web = 'Web technologies',
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
  description: string;
  skillsName: string[];
};