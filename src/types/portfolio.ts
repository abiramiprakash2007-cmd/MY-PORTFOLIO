export type ProjectStatus = 'Completed' | 'Prototype' | 'Proposed Idea' | 'SIH 2026';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & Computer Vision' | 'Security & Systems' | 'Social Good' | 'Hackathon';
  status: ProjectStatus;
  statusColor: string;
  description: string;
  fullOverview: string;
  problemStatement: string;
  solutionApproach: string;
  keyFeatures: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  architectureNotes?: string;
}

export interface SkillCategory {
  categoryName: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    tag?: string;
    highlight?: boolean;
  }[];
}

export interface InternshipItem {
  company: string;
  role: string;
  duration: string;
  type: string;
  location: string;
  status: 'Open for Opportunities' | 'Completed' | 'In Progress';
  responsibilities: string[];
  technologies: string[];
  learningOutcomes: string[];
  note?: string;
}

export interface AreaOfInterest {
  title: string;
  description: string;
  keyFocus: string[];
  icon: string;
}

export interface CareerMilestone {
  phase: string;
  title: string;
  timeline: string;
  focus: string;
  deliverables: string[];
}
