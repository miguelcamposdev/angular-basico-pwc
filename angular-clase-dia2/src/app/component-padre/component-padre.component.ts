import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-padre',
  templateUrl: './component-padre.component.html',
  styleUrls: ['./component-padre.component.css']
})
export class ComponentPadreComponent implements OnInit {
  contador = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  resetear() {
    this.contador = 0;
  }

  decrementar() {
    this.contador--;
  }

  incrementar() {
    this.contador++;
  }


}
