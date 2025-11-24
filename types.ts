import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Metric {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface AnalysisResult {
  feasibility: string;
  techStack: string[];
  estimatedTime: string;
  summary: string;
}

export enum Section {
  Hero = 'hero',
  Services = 'services',
  Demo = 'demo',
  About = 'about',
  Contact = 'contact'
}