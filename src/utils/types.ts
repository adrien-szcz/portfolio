import type { ReactNode } from "react";
import type { Technology } from "./enums";

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
  date: string;
};

export type CubeProps = {
  size: number;
}