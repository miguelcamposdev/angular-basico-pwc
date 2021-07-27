import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-hijo',
  templateUrl: './component-hijo.component.html',
  styleUrls: ['./component-hijo.component.css']
})
export class ComponentHijoComponent implements OnInit {
  title = 'Componente hijo cargado completamente';
  @Input() extra: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
