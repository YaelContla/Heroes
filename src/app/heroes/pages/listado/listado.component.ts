import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService ){}

  ngOnInit(): void{
    this.heroesService.getHeroes()
    .subscribe( resp => {
      // resp[0].
      this.heroes =  resp;
    });
  }

  // heroes(){
  //   return this.heroesService.heroes;
  // }

}
