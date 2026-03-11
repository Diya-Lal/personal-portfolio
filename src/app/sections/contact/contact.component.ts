import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  links = [
    {
      label: 'EMAIL',
      icon: '&#9993;',
      href: 'mailto:diya.ammianickal@gmail.com',
    },
    { label: 'GITHUB', icon: '&#9670;', href: 'https://github.com/Diya-Lal' },
    {
      label: 'LINKEDIN',
      icon: '&#9632;',
      href: 'https://www.linkedin.com/in/diyalal/',
    },
  ];

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.contact-inner > *', {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-section', start: 'top 80%' },
    });
  }
}
