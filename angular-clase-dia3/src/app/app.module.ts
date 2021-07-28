import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentPadreComponent } from './component-padre/component-padre.component';
import { ComponentHijoComponent } from './component-hijo/component-hijo.component';
import { MoviesPopularComponent } from './movies-popular/movies-popular.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPadreComponent,
    ComponentHijoComponent,
    MoviesPopularComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
