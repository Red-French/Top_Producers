import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// The HeroDetailComponent should receive the hero from the AppComponent and display that hero's detail beneath the list. The detail should update every time the user picks a new hero.

@Component({  // decorator
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div><label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
