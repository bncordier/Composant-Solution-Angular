import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-films',
  templateUrl: './hero-films.component.html',
  styleUrls: ['./hero-films.component.css']
})
export class HeroFilmsComponent implements OnInit {
  
  isTheGreatest:boolean=true;
  ShowMovies:boolean=true;

  constructor() { }

  ngOnInit() {
  }

}
