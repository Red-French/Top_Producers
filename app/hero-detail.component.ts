import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';


@Component({  // decorator
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: [ 'hero-detail.component.css' ]
})


export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))  // The hero id is a number, and route parameters are
                                                                               // always strings, so convert the route parameter
                                                                               // to a number with the JavaScript (+) operator.
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
  this.location.back();
}

}
