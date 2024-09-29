import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import {  GenreComponent } from './Component/genra/genra.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './Component/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,   
     
    HeaderComponent,
    FooterComponent,
    GenreComponent,
    MoviesComponent
  ],
  imports: [   
      FormsModule ,// Add this line
      HttpClientModule,
    BrowserModule,
    AppRoutingModule
    ,   
     ReactiveFormsModule // Add ReactiveFormsModule here

    ,
     RouterModule // Add RouterModule here if not using a separate routing module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
