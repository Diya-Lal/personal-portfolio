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
      role: 'Frontend Engineer',
      company: 'Collaboration Factory GmbH',
      location: 'Germany · Remote',
      desc: 'Building enterprise-grade frontend at scale: microfrontends, shared SDKs, and the kind of code that other squads actually want to use.',
      bullets: [
        'Built and maintained a scalable shared component library and contributed to a custom design system within a Micro Frontend architecture, enabling 5+ product teams to ship features faster and reducing UI inconsistencies.',
        'Improved application performance by reducing initial load times through lazy loading, code splitting, and optimized rendering strategies, validated using Lighthouse and Core Web Vitals.',
        'Increased test coverage by expanding unit (Jest) and end-to-end (Cypress) test suites, strengthening reliability and reducing production regressions.',
        'Owned accessibility initiatives across the frontend, achieving WCAG 2.0 AA compliance and embedding accessibility standards into development workflows.',
        'Accelerated development cycles through Storybook-driven component development, reducing feedback loops and enabling early stakeholder validation.',
        'Contributed to frontend architectural decisions by researching emerging patterns and building proof of concepts to evaluate feasibility of new approaches.',
        'Improved developer productivity by integrating AI-assisted development workflows, reducing turnaround time on complex features and refactoring efforts.',
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
      role: 'Frontend Engineer',
      company: 'Infosys Limited',
      location: 'India',
      desc: 'From pixel-perfect UIs to mentoring the next generation: three years of building things that worked, and people who grew.',
      bullets: [
        'Delivered responsive, scalable Angular applications using RESTful APIs, improving maintainability and enabling faster feature delivery across multiple logistics hubs.',
        'Owned a key module in an AngularJS to modern Angular migration, covering requirements analysis, UI redesign in collaboration with designers, and full implementation.',
        'Collaborated in Agile (Scrum) teams with designers and backend engineers to deliver high-quality, user-centric interfaces aligned with business goals.',
        'Conducted code reviews and enforced engineering best practices, improving code quality and consistency across the team.',
        'Mentored junior developers through pair programming and documentation, reducing onboarding time and improving team productivity.',
      ],
      tags: ['Angular', 'AngularJS', 'TypeScript', 'HTML', 'SCSS', 'Agile'],
    },
    {
      year: 'Oct 2016 — Mar 2019',
      role: 'Software Developer',
      company: 'Tata Consultancy Services (TCS)',
      location: 'India',
      desc: 'Where it all began. Middleware, financial systems, and learning that reliable software is serious craft.',
      bullets: [
        'Developed middleware and integration solutions for financial messaging systems (SWIFT), enabling reliable and scalable data processing across enterprise pipelines.',
        'Collaborated with cross-functional teams to ensure high availability and performance of critical system integrations.',
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
