import { Technology } from "../utils/enums";

import type { SkillInfos } from "../utils/types";

export const skillsData: SkillInfos[] = [

  // Software Development
  {
    name: 'Java',
    icon: 'devicon-java-plain',
    technology: Technology.SoftwareDevelopment,
  },
  {
    name: 'C#',
    icon: 'devicon-csharp-plain',
    technology: Technology.SoftwareDevelopment,
  },
  {
    name: 'C',
    icon: 'devicon-c-plain',
    technology: Technology.SoftwareDevelopment,
  },
  {
    name: 'Lua',
    icon: 'devicon-lua-plain',
    technology: Technology.SoftwareDevelopment,
  },
  {
    name: '.NET',
    icon: 'devicon-dotnetcore-plain',
    technology: Technology.SoftwareDevelopment,
  },
  {
    name: 'UML',
    icon: 'devicon-unifiedmodelinglanguage-plain',
    technology: Technology.SoftwareDevelopment,
  },

  // Web Development
  {
    name: 'HTML',
    icon: 'devicon-html5-plain',
    technology: Technology.WebDevelopment,
  },
  {
    name: 'CSS',
    icon: 'devicon-css3-plain',
    technology: Technology.WebDevelopment,
  },
  {
    name: 'TypeScript',
    icon: 'devicon-typescript-plain',
    technology: Technology.WebDevelopment,
  },
  {
    name: 'React',
    icon: 'devicon-react-original',
    technology: Technology.WebDevelopment,
  },
  {
    name: 'Angular',
    icon: 'devicon-angular-plain',
    technology: Technology.WebDevelopment,
  },
  {
    name: 'PHP',
    icon: 'devicon-php-plain',
    technology: Technology.WebDevelopment,
  },
  {
    name: 'Symfony',
    icon: 'devicon-symfony-original',
    technology: Technology.WebDevelopment,
  },

  // Data Science
  {
    name: 'Python',
    icon: 'devicon-python-plain',
    technology: Technology.DataScience,
  },
  {
    name: 'Pandas',
    icon: 'devicon-pandas-plain',
    technology: Technology.DataScience,
  },
  {
    name: 'NumPy',
    icon: 'devicon-numpy-plain',
    technology: Technology.DataScience,
  },
  {
    name: 'Matplotlib',
    icon: 'devicon-matplotlib-plain',
    technology: Technology.DataScience,
  },
  {
    name: 'Scikit-learn',
    icon: 'devicon-scikitlearn-plain',
    technology: Technology.DataScience,
  },

  // Database
  {
    name: 'MySQL',
    icon: 'devicon-mysql-plain',
    technology: Technology.Database,
  },

  // DevOps
  {
    name: 'Git',
    icon: 'devicon-git-plain',
    technology: Technology.DevOps,
  },
  {
    name: 'GitLab',
    icon: 'devicon-gitlab-plain',
    technology: Technology.DevOps,
  },
];