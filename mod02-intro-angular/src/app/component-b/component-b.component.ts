import { Component, Input, OnInit } from '@angular/core';
import { Geo, Usuario } from '../models/usuario.interface';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  @Input() location: Geo | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(`${this.location?.lat}, ${this.location?.lng}`);
  }

}
