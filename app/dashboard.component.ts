import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}  // Inject HeroService in the constructor and hold it in a private 'heroService'  field

  ngOnInit(): void {
    this.heroService.getHeroes()  // call the service to get heroes
    .then(heroes => this.heroes = heroes.slice(0, 4));  // return the top 4
  }

}
