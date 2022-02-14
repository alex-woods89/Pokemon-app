import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPokemonComponent } from './all-pokemon/all-pokemon.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
 { path: 'allPokemon', component: AllPokemonComponent },
 { path: 'myTeam', component: MyTeamComponent },
 { path: 'teams', component: TeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
