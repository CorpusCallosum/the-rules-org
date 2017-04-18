import { Injectable } from '@angular/core'; //wahtever that means

import { Hero } from './hero'; //import hero class
import { HEROES } from './mock-heroes'; //import mock data

@Injectable() 
export class HeroService {
  
  //this just returns the hero array mock data, as a promise
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }

}