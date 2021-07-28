import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { PopularMovie } from '../models/popular-movies.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: PopularMovie | undefined;
  @Output() movieEmitter = new EventEmitter<PopularMovie>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.movie);
  }

  getImageUrl(fileName: string | undefined) {
    return `https://image.tmdb.org/t/p/w500/${fileName}`;
  }

  favClicked(movie: PopularMovie | undefined) {
    this.movieEmitter.emit(movie);
  }

}
