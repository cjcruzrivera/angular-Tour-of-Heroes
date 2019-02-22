import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  visibility = false;
  new_name = "";


  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  showInput(): void {
    this.visibility = !this.visibility; 
  }

  addHero(): void {
    let nuevo_heroe: Hero;
    var ultimo = this.heroes[this.heroes.length - 1].id + 1;
    nuevo_heroe = {id: ultimo, name: this.new_name};
    this.heroes.push(nuevo_heroe);
    this.visibility = !this.visibility; 
  }

  ngOnInit() {
    this.getHeroes();
  }

}
