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
        'Built reusable production-grade UI components using Storybook and integrated them into a shared frontend SDK consumed by multiple product teams.',
        'Ensured accessibility compliance by implementing WCAG 2.0 standards, improving usability and inclusive user experiences.',
        'Increased application reliability by implementing unit tests with Jest and end-to-end tests with Cypress, improving test coverage and reducing production regressions.',
        'Collaborated within Agile Scrum teams, participating in sprint planning, code reviews, and retrospectives to deliver high-quality frontend features.',
        'Leveraged AI-assisted development tools (Claude Code) to accelerate feature delivery, streamline refactoring, and improve automated test coverage.',
      ],
      tags: [
        'Angular',
        'Nx',
        'Microfrontends',
        'Storybook',
        'Jest',
        'Cypress',
        'WCAG',
        'TypeScript',
      ],
    },
    {
      year: 'Mar 2019 — May 2022',
      role: 'Technology Analyst',
      company: 'Infosys',
      location: 'Trivandrum, India',
      desc: 'From pixel-perfect UIs to mentoring the next generation — three years of building things that worked, and people who grew.',
      bullets: [
        'Developed responsive, maintainable Angular applications integrating REST APIs, improving frontend efficiency and user experience.',
        'Modernized legacy Angular codebases, enhancing performance, maintainability, and reliability of production features.',
        'Delivered production-ready UI modules and new feature implementations, contributing to successful releases across multiple hubs.',
        'Collaborated with UX designers, product managers, and cross-functional teams to ensure timely, high-quality delivery of frontend features.',
        'Mentored junior engineers and established team-wide best practices, improving code quality, knowledge sharing, and overall productivity.',
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
      opacity: 0,
      y: 40,
      duration: 0.7,
      scrollTrigger: { trigger: '.experience-section', start: 'top 80%' },
    });

    gsap.from('.job-entry', {
      opacity: 0,
      x: -40,
      stagger: 0.2,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.exp-timeline', start: 'top 85%' },
    });
  }
}
