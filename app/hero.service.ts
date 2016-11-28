import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';  // import the mock data

@Injectable()  // decorator

export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);  // return the mock data
  }

// change to call this method to simulate a slow network
  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 5000)) // delay 5 seconds
    .then(() => this.getHeroes());
}

}
