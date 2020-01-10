import { Component, OnInit , Input} from '@angular/core';
import { Heroes } from '../heroes';
@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {
@Input() hero:Heroes;
  constructor() { }

  ngOnInit() {
  }

}