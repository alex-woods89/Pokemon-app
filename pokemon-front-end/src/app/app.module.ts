import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { AllPokemonComponent } from './all-pokemon/all-pokemon.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewPokemonComponent } from './view-pokemon/view-pokemon.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyTeamComponent,
    AllPokemonComponent,
    HomePageComponent,
    ViewPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
