import type { SkillInfos } from './type';
import { Technology } from './type';

export const skillsData: SkillInfos[] = [
  // Programming
  {
    name: 'Java',
    icon: 'devicon-java-plain',
    technology: Technology.Programming,
  },
  {
    name: 'Python',
    icon: 'devicon-python-plain',
    technology: Technology.Programming,
  },
  {
    name: 'Lua',
    icon: 'devicon-lua-plain',
    technology: Technology.Programming,
  },
  {
    name: 'C#',
    icon: 'devicon-csharp-plain',
    technology: Technology.Programming,
  },
  {
    name: 'C',
    icon: 'devicon-c-plain',
    technology: Technology.Programming,
  },
  
  // Web
  {
    name: 'HTML',
    icon: 'devicon-html5-plain',
    technology: Technology.Web,
  },
  {
    name: 'CSS',
    icon: 'devicon-css3-plain',
    technology: Technology.Web,
  },
  {
    name: 'TypeScript',
    icon: 'devicon-typescript-plain',
    technology: Technology.Web,
  },
  {
    name: 'React',
    icon: 'devicon-react-original',
    technology: Technology.Web,
  },
  {
    name: 'Angular',
    icon: 'devicon-angular-plain',
    technology: Technology.Web,
  },
  {
    name: 'PHP',
    icon: 'devicon-php-plain',
    technology: Technology.Web,
  },
  {
    name: 'Symfony',
    icon: 'devicon-symfony-original',
    technology: Technology.Web,
  },
  
  // Database
  {
    name: 'MySQL',
    icon: 'devicon-mysql-plain',
    technology: Technology.Database,
  },

  // Others
  {
    name: 'Git',
    icon: 'devicon-git-plain',
    technology: Technology.Others,
  },
  {
    name: 'Gitlab',
    icon: 'devicon-gitlab-plain',
    technology: Technology.Others,
  },
  {
    name: 'UML',
    icon: 'devicon-unifiedmodelinglanguage-plain',
    technology: Technology.Others,
  },
];