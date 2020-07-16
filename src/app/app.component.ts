import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'practice-app';
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Metronome',
        link: '/metronome',
        index: 0
      }, {
        label: 'Drone',
        link: '/drone',
        index: 1
      }, {
        label: 'Tuner',
        link: '/tuner',
        index: 2
      }, {
        label: 'Timer',
        link: '/timer',
        index: 3
      }, {
        label: 'Record',
        link: '/record',
        index: 3
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
