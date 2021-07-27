import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Usuario } from '../models/usuario.interface';

@Component({
  selector: 'app-selected-usuario',
  templateUrl: './selected-usuario.component.html',
  styleUrls: ['./selected-usuario.component.css']
})
export class SelectedUsuarioComponent implements OnInit, OnChanges {
  @Input() user?: Usuario;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`CURRENT: ${cur} \n PREV: ${prev}`);
    }
  }

  ngOnInit(): void {
  }

}
