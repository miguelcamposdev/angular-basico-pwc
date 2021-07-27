import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-phone-usuario',
  templateUrl: './phone-usuario.component.html',
  styleUrls: ['./phone-usuario.component.css']
})
export class PhoneUsuarioComponent implements OnInit {
  @Input() phone: string = '';
  @Output() actionCall = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  llamarPadre() {
    this.actionCall.emit(this.phone);
  }

}
