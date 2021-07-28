import { Component, OnInit } from '@angular/core';
import { Person, PersonPopularResponse } from '../models/person-popular.interface';

const PEOPLE: PersonPopularResponse = JSON.parse(`{
  "page": 1,
  "results": [
      {
          "adult": false,
          "gender": 1,
          "id": 1245,
          "known_for": [
              {
                  "adult": false,
                  "backdrop_path": "/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg",
                  "genre_ids": [
                      878,
                      28,
                      12
                  ],
                  "id": 24428,
                  "media_type": "movie",
                  "original_language": "en",
                  "original_title": "The Avengers",
                  "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
                  "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
                  "release_date": "2012-04-25",
                  "title": "The Avengers",
                  "video": false,
                  "vote_average": 7.7,
                  "vote_count": 25064
              },
              {
                  "adult": false,
                  "backdrop_path": "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
                  "genre_ids": [
                      12,
                      28,
                      878
                  ],
                  "id": 299536,
                  "media_type": "movie",
                  "original_language": "en",
                  "original_title": "Avengers: Infinity War",
                  "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
                  "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
                  "release_date": "2018-04-25",
                  "title": "Avengers: Infinity War",
                  "video": false,
                  "vote_average": 8.3,
                  "vote_count": 22289
              }
            ]
        }
  ],
  "total_pages": 500,
  "total_results": 10000
}`);

@Component({
  selector: 'app-person-popular-list',
  templateUrl: './person-popular-list.component.html',
  styleUrls: ['./person-popular-list.component.css']
})
export class PersonPopularListComponent implements OnInit {
  listadoActores: Person[] = PEOPLE.results;
  actorFav: Person | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(PEOPLE.page);
  }

  setFavorite(person: Person) {
    this.actorFav = person;
  }

  getImageUrl(fileName: string | undefined) {
    return `https://image.tmdb.org/t/p/w500/${fileName}`;
  }

}
