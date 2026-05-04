import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface Project {
  name: string;
  desc: string;
  tech: string[];
  status?: string;
  color: string;
  icon: string;
  link: string;
  github: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  projects: Project[] = [
    {
      name: 'WanderBite',
      desc: 'A travel food discovery platform built on a full Micro Frontend architecture using Nx Monorepo and Webpack Module Federation with independently deployable Angular and React micro-apps.',
      tech: [
        'Angular',
        'React',
        'TypeScript',
        'Nx',
        'Module Federation',
        'RxJS',
      ],
      color: '#ff9f43',
      icon: '&#9650;',
      link: 'https://wanderbite.netlify.app/homepage',
      github: 'https://github.com/Diya-Lal/wanderbite',
    },
    {
      name: 'Livepad',
      desc: 'A full-stack real-time document collaboration platform with conflict-free sync using Yjs CRDTs and Hocuspocus WebSockets. Features JWT dual-token auth with silent session restore, optimistic UI via React Query, and a four-role permissions model (Owner, Editor, Commenter, Viewer) enforced across client and server.',
      tech: [
        'React',
        'TypeScript',
        'Node.js',
        'Yjs',
        'Tailwind',
        'Hocuspocus',
        'PostgreSQL',
        'Prisma',
        'Zod',
      ],
      color: '#64ffda',
      icon: '&#9670;',
      link: '',
      github: 'https://github.com/Diya-Lal/livepad',
    },
    {
      name: 'DFlix',
      desc: 'A Netflix-inspired movie discovery site powered by the TMDB API. Browse, search, and explore films and TV shows.',
      tech: ['Angular', 'TypeScript', 'TMDB API', 'Chart.js'],
      color: '#a29bfe',
      icon: '&#9632;',
      link: '',
      github: 'https://github.com/Diya-Lal/Dflix',
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
      immediateRender: false,
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%',
        invalidateOnRefresh: true,
      },
    });
  }
}
