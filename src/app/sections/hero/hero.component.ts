import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  techStack = [
    'Angular',
    'TypeScript',
    'RxJS',
    'React',
    'Nx Monorepos',
    'Micro Frontends',
  ];

  ngAfterViewInit() {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from('.hud', { opacity: 0, y: -24, duration: 0.5, ease: 'power2.out' })
      .from(
        '.egg-body',
        { opacity: 0, scale: 0, duration: 0.8, ease: 'back.out(3)' },
        '-=0.2',
      )
      .from(
        '.hero-name',
        { opacity: 0, y: 50, duration: 0.7, ease: 'power3.out' },
        '-=0.3',
      )
      .from(
        '.hero-subtitle',
        { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' },
        '-=0.3',
      )
      .from(
        '.tech-tag',
        { opacity: 0, y: 20, stagger: 0.1, duration: 0.4, ease: 'power2.out' },
        '-=0.2',
      )
      .from('.scroll-prompt', { opacity: 0, duration: 0.5 }, '+=0.1');
  }
}
