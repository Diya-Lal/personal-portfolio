import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface Skill {
  name: string;
  years: number;
  category: 'core' | 'tools' | 'concepts';
  level: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  activeSkill: Skill | null = null;

  skills: Skill[] = [
    { name: 'Angular', years: 4, category: 'core', level: 5 },
    { name: 'TypeScript', years: 4, category: 'core', level: 5 },
    { name: 'RxJS', years: 3, category: 'core', level: 5 },
    { name: 'HTML / CSS', years: 6, category: 'core', level: 5 },
    { name: 'JavaScript', years: 5, category: 'core', level: 5 },
    { name: 'Nx Monorepos', years: 2, category: 'tools', level: 5 },
    { name: 'Git', years: 5, category: 'tools', level: 4 },
    { name: 'Node.js', years: 3, category: 'tools', level: 3 },
    { name: 'Tailwind CSS', years: 2, category: 'tools', level: 4 },
    { name: 'Microfrontends', years: 2, category: 'concepts', level: 5 },
    { name: 'Performance', years: 3, category: 'concepts', level: 5 },
    { name: 'REST APIs', years: 4, category: 'concepts', level: 4 },
    { name: 'Agile / Scrum', years: 3, category: 'concepts', level: 4 },
  ];

  levelDots(n: number): number[] {
    return Array(n).fill(0);
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.skills-heading', {
      opacity: 0,
      y: 40,
      duration: 0.7,
      scrollTrigger: { trigger: '.skills-section', start: 'top 80%' },
    });

    gsap.from('.skill-card', {
      opacity: 0,
      y: 30,
      scale: 0.9,
      stagger: 0.05,
      duration: 0.5,
      ease: 'back.out(1.5)',
      scrollTrigger: { trigger: '.skills-grid', start: 'top 85%' },
    });
  }
}
