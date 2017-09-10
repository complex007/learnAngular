import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  };
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes : Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  };
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);;
  };
  constructor(private heroService: HeroService, private router: Router) { 
  }
}
