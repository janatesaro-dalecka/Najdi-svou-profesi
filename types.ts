// Fix: Import React to make React types available in this file.
import React from 'react';

export type Skill = string;

export interface Profession {
  name: string;
  skills: Skill[];
  icon: React.ComponentType<{ className?: string }>;
}

export interface ProfessionResult {
  profession: Profession;
  matchCount: number;
}