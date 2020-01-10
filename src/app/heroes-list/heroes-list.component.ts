import { Component, OnInit } from '@angular/core';
import { heroes } from '../mock-heroes';
import {Heroes} from '../heroes';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
heroes=heroes;
selectedHero: Heroes;
  constructor() { }
onSelect(hero:Heroes):void {
  debugger;
this.selectedHero=hero;
}
  ngOnInit() {
  console.log(this.selectedHero);
  }

}