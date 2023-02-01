import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroes.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Heroe[] = [];

  constructor( private http: HttpClient ) { }

  // Se crea la función/petición
  getHeroes(){
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

}
