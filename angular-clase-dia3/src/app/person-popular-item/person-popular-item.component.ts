import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../models/person-popular.interface';

@Component({
  selector: 'app-person-popular-item',
  templateUrl: './person-popular-item.component.html',
  styleUrls: ['./person-popular-item.component.css']
})
export class PersonPopularItemComponent implements OnInit {
  @Input() person: Person | undefined;
  @Output() personFavEmitter = new EventEmitter<Person>();

  constructor() { }

  ngOnInit(): void {
  }

  favClicked(personSelected: Person | undefined) {
    this.personFavEmitter.emit(personSelected);
  }

  getImageUrl(fileName: string | undefined) {
    return `https://image.tmdb.org/t/p/w500/${fileName}`;
  }

}
