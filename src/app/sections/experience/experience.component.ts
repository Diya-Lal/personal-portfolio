import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface Job {
  year: string;
  role: string;
  company: string;
  location: string;
  desc: string;
  bullets: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements AfterViewInit {
  jobs: Job[] = [
    {
      year: 'Sep 2022 — Present',
      role: 'Frontend UI Engineer',
      company: 'cplace',
      location: 'Munich, Germany · Remote',
      desc: 'Building enterprise-grade frontend at scale — microfrontends, shared SDKs, and the kind of code that other squads actually want to use.',
      bullets: [
        'Migrated legacy AngularJS to Angular inside an Nx monorepo with Webpack Module Federation — scalable, isolated, ship-able.',
        'Built production-grade UI components in Storybook, shipped as a shared SDK consumed across multiple squads.',
        'Owned WCAG 2.0 accessibility compliance across UI components — inclusive by design, not by afterthought.',
        'Grew test coverage via Jest (unit) and Cypress (E2E), systematically eliminating regression risk.',
        'Shipped faster with AI-assisted development — using the tools of the future, today.',
      ],
      tags: ['Angular', 'Nx', 'Microfrontends', 'Storybook', 'Jest', 'Cypress', 'WCAG', 'TypeScript'],
    },
    {
      year: 'Mar 2019 — May 2022',
      role: 'Technology Analyst',
      company: 'Infosys',
      location: 'Trivandrum, India',
      desc: 'From pixel-perfect UIs to mentoring the next generation — three years of building things that worked, and people who grew.',
      bullets: [
        'Built responsive Angular UIs from Adobe XD specs with zero gap between design intent and shipped result.',
        'Modernised legacy codebases to current Angular standards — performance up, headaches down.',
        'Owned new module development end-to-end, from architecture decisions to production releases.',
        'Mentored junior developers and wrote the docs nobody else was writing.',
      ],
      tags: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Adobe XD', 'Agile'],
    },
    {
      year: 'Oct 2016 — Mar 2019',
      role: 'System Engineer',
      company: 'Tata Consultancy Services',
      location: 'Kochi, India',
      desc: 'Where it all began. Middleware, financial systems, and learning that reliable software is serious craft.',
      bullets: [
        'Developed and maintained middleware for system integration — data in, data out, zero drama.',
        'Worked with SWIFT financial messaging systems, contributing to format analysis and development.',
        'Collaborated across teams to keep critical system communication accurate and reliable.',
      ],
      tags: ['Middleware', 'SWIFT', 'System Integration', 'Cross-functional'],
    },
  ];

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.exp-heading', {
      opacity: 0, y: 40, duration: 0.7,
      scrollTrigger: { trigger: '.experience-section', start: 'top 80%' },
    });

    gsap.from('.job-entry', {
      opacity: 0, x: -40,
      stagger: 0.2, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.exp-timeline', start: 'top 85%' },
    });
  }
}
