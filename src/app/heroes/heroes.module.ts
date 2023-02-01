import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
