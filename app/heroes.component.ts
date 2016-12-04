import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Hero }              from './hero';
import { HeroService }       from './hero.service';

@Component({  // decorator
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: [ 'heroes.component.css' ]
  })


export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService  // This constructor itself does nothing. The parameter simultaneously defines a
                                      // private heroService property and identifies it as a HeroService injection site.
  ) {}                                // Now, Angular will know to supply an instance of the HeroService when it
                                      // creates a new AppComponent.

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);  // The callback sets the heroes property (this.heroes) to the
                                                                        // array of heroes returned by the service.
                                                                        // (The service returns 'heroes' which is passed into the fat
                                                                        // arrow function; this.heroes is then set to 'heroes'.)
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
  }


}
