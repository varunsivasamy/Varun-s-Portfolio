import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  features: string[];
  techStack: string[];
  approach: string;
  results: string;
  learned: string;
  image: string;
  gallery?: string[]; // Array of images for the project gallery
  githubLink?: string;
  demoLink?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  type?: 'work' | 'hackathon' | 'position'; 
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  score?: string;
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  description: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}