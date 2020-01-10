import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
heroes=HEROES;
selectedHero: Hero;
  constructor() { }
onSelectedHero(hero:Hero):void {
this.selectedHero=hero;
}
  ngOnInit() {
  }

}