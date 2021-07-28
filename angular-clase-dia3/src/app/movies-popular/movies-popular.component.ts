import { Component, OnInit } from '@angular/core';
import { PopularMovie, PopularMoviesResponse } from '../models/popular-movies.interface';
import { MovieService } from '../services/movie.service';

const MOVIES: PopularMoviesResponse = JSON.parse(`{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/8s4h9friP6Ci3adRGahHARVd76E.jpg",
      "genre_ids": [
        16,
        35,
        10751,
        878
      ],
      "id": 379686,
      "original_language": "en",
      "original_title": "Space Jam: A New Legacy",
      "overview": "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
      "popularity": 5712.919,
      "poster_path": "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
      "release_date": "2021-07-08",
      "title": "Space Jam: A New Legacy",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 1263
    },
    {
      "adult": false,
      "backdrop_path": "/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
      "genre_ids": [
        28,
        12,
        53,
        878
      ],
      "id": 497698,
      "original_language": "en",
      "original_title": "Black Widow",
      "overview": "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
      "popularity": 4719.094,
      "poster_path": "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
      "release_date": "2021-07-07",
      "title": "Black Widow",
      "video": false,
      "vote_average": 8,
      "vote_count": 3393
    },
    {
      "adult": false,
      "backdrop_path": "/tehpKMsls621GT9WUQie2Ft6LmP.jpg",
      "genre_ids": [
        12,
        53,
        28,
        27,
        37
      ],
      "id": 602223,
      "original_language": "en",
      "original_title": "The Forever Purge",
      "overview": "All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end as they chase a group of immigrants who they want to punish because of their harsh historical past.",
      "popularity": 4309.826,
      "poster_path": "/uHA5COgDzcxjpYSHHulrKVl6ByL.jpg",
      "release_date": "2021-06-30",
      "title": "The Forever Purge",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 601
    }
  ],
  "total_pages": 500,
  "total_results": 10000
}`); 

@Component({
  selector: 'app-movies-popular',
  templateUrl: './movies-popular.component.html',
  styleUrls: ['./movies-popular.component.css']
})
export class MoviesPopularComponent implements OnInit {
  selectedMovie: PopularMovie = MOVIES.results[0];
  popularMovies: PopularMovie[] | undefined;
  favMovie: PopularMovie | undefined;

  constructor(private movieService: MovieService) { 
  }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(resultado => {
      this.popularMovies = resultado.results;
    });
  }

  getImageUrl(fileName: string | undefined) {
    return `https://image.tmdb.org/t/p/w500/${fileName}`;
  }

  setNewFavMovie(movie: PopularMovie | undefined) {
    this.favMovie = movie;
  }


}
