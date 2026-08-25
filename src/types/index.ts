export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  sector: string;
  role: string;
  scope: string;
}

export interface Tool {
  id: string;
  name: string;
  category: 'core' | 'data';
}

export interface Sector {
  id: string;
  name: string;
}

export interface SiteData {
  fullName: string;
  compactName: string;
  title: string;
  valueProposition: string;
  summary: string;
  email: string;
  linkedin: string;
  location: string;
  availability: string;
}
