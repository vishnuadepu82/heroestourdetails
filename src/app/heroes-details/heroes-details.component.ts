import { Component, OnInit } from '@angular/core';
import { Hero} from '../heroes.ts';
@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {

  constructor() { }
hero:Hero={id:1,name:'Vishnu'};
  ngOnInit() {
  }

}