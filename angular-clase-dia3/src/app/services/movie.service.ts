import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularMoviesResponse } from '../models/popular-movies.interface';

const API_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
    console.log('Servicio iniciado');
  }

  getPopularMovies(): Observable<PopularMoviesResponse> {
    return this.http.get<PopularMoviesResponse>(`${API_URL}/movie/popular?api_key=433d2c486572afb242c6fe7c1ddc6771`);
  }
}
