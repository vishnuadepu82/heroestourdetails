import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroesComponent, HeroesListComponent, HeroesDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
