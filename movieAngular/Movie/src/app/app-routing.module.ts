import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  GenreComponent } from './Component/genra/genra.component';
import { MoviesComponent } from './Component/movies/movies.component';

const routes: Routes = [

  { path: 'genres', component: GenreComponent }, 
  { path: 'movies', component: MoviesComponent }, // Route for movies
  // Route for genres
  { path: '', redirectTo: '/genres', pathMatch: 'full' } // Default route to redirect to genres
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
