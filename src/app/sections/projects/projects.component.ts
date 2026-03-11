import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface Project {
  name: string;
  desc: string;
  tech: string[];
  status: string;
  color: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  projects: Project[] = [
    {
      name: 'Evolution Portfolio',
      desc: 'This very portfolio — a scroll-driven side-scroller that evolves as you explore. Built with Angular, GSAP ScrollTrigger, and pure CSS art.',
      tech: ['Angular', 'GSAP', 'TypeScript', 'Tailwind'],
      status: 'LIVE',
      color: '#64ffda',
      icon: '&#9670;',
      link: '',
    },
    {
      name: 'WanderBite',
      desc: 'A travel food discovery platform. Find the best local bites wherever you wander. Explore curated food spots city by city.',
      tech: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
      status: 'LIVE',
      color: '#ff9f43',
      icon: '&#9650;',
      link: 'https://wanderbite.netlify.app/homepage',
    },
    {
      name: 'DFlix',
      desc: 'A Netflix-inspired movie discovery site powered by the TMDB API. Browse, search, and explore films and TV shows.',
      tech: ['Angular', 'TypeScript', 'TMDB API'],
      status: 'OSS',
      color: '#a29bfe',
      icon: '&#9632;',
      link: 'https://github.com/Diya-Lal/Dflix',
    },
  ];

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.projects-heading', {
      opacity: 0,
      y: 40,
      duration: 0.7,
      scrollTrigger: { trigger: '.projects-section', start: 'top 80%' },
    });

    gsap.from('.project-card', {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' },
    });
  }
}
