import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface Stage {
  id: number;
  label: string;
  title: string;
  year: string;
  desc: string;
  traits: string[];
  bgClass: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements AfterViewInit, OnDestroy {
  @ViewChild('timelineSection') sectionRef!: ElementRef<HTMLElement>;
  @ViewChild('world') worldRef!: ElementRef<HTMLElement>;

  currentStage = 1;

  stages: Stage[] = [
    {
      id: 1,
      label: 'STAGE 01',
      title: 'Birth of Curiosity',
      year: 'Year Zero',
      desc: 'Every great developer starts somewhere. Mine started with wonder — the glow of a screen and a thousand unanswered questions.',
      traits: ['Curiosity', 'Problem Solving'],
      bgClass: 'bg-birth',
    },
    {
      id: 2,
      label: 'STAGE 02',
      title: 'School Years',
      year: '2000s - 2010s',
      desc: 'First contact. A keyboard, a monitor, a blinking cursor. Something clicked.',
      traits: ['Logic', 'Creativity', 'Persistence', 'HTML', 'CSS'],
      bgClass: 'bg-school',
    },
    {
      id: 3,
      label: 'STAGE 03',
      title: 'College · Discovery',
      year: '2012 - 2016',
      desc: 'Programming rewired my brain entirely.',
      traits: ['JavaScript', 'Git'],
      bgClass: 'bg-college',
    },
    {
      id: 4,
      label: 'STAGE 04',
      title: 'Developer Unlocked',
      year: '2016 - 2022',
      desc: 'First industry job. Angular loaded. TypeScript compiled. Career: initiated.',
      traits: ['Angular', 'TypeScript', 'REST APIs', 'Agile'],
      bgClass: 'bg-job',
    },
    {
      id: 5,
      label: 'STAGE 05',
      title: 'Level Up',
      year: '2022 - Present',
      desc: 'Architecture. Mentorship. Microfrontends at scale. The journey continues.',
      traits: ['Nx Monorepos', 'Microfrontends', 'Performance', 'Leadership'],
      bgClass: 'bg-senior',
    },
  ];

  stars = Array.from({ length: 36 }, (_, i) => ({
    top: `${((i * 17 + 7) % 65) + 2}%`,
    left: `${((i * 23 + 11) % 96) + 2}%`,
    size: i % 4 === 0 ? '3px' : '2px',
    opacity: (0.2 + ((i * 7) % 8) * 0.1).toFixed(2),
    duration: `${(1.2 + (i % 4) * 0.5).toFixed(1)}s`,
    delay: `${((i % 6) * 0.35).toFixed(2)}s`,
  }));

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    const section = this.sectionRef.nativeElement;
    const world = this.worldRef.nativeElement;
    const numStages = this.stages.length;
    const scrollDistance = (numStages - 1) * window.innerWidth;

    gsap.to(world, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: `+=${numStages * window.innerWidth}`,
        anticipatePin: 1,
        onUpdate: () => {
          const x = gsap.getProperty(world, 'x') as number;
          const stage = Math.min(
            numStages,
            Math.floor(-x / window.innerWidth + 0.25) + 1,
          );
          if (stage !== this.currentStage) {
            this.currentStage = stage;
            this.cdr.detectChanges();
          }
        },
      },
    });
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
}
