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
import { PersonPopularListComponent } from './person-popular-list/person-popular-list.component';
import { PersonPopularItemComponent } from './person-popular-item/person-popular-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPadreComponent,
    ComponentHijoComponent,
    MoviesPopularComponent,
    MovieDetailComponent,
    PersonPopularListComponent,
    PersonPopularItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
