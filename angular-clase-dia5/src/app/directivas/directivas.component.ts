import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  imagenUrl = '../../assets/angular-logo-png.png';
  nombre = 'Miguel';
  mostrarPolitica = true;
  meGusta = true;
  fecha = Date();
  coste = 5;
  fechaFormateada: string | null = '';

  constructor(private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    this.fechaFormateada = this.datePipe.transform(this.fecha, 'd-M-Y');
  }

  navegar() {
    this.router.navigate(['admin']);
  }

  decrementar() {
    this.coste--;
  }

  incrementar() {
    this.coste++;
  }

  cambiarImagen() {
    if(this.imagenUrl == '../../assets/angular-logo-png.png') {
      this.imagenUrl = '../../assets/angular-logo-black.jpeg';
    } else {
      this.imagenUrl = '../../assets/angular-logo-png.png';
    }
  }

  aceptarCookies(acepta: boolean) {
    this.mostrarPolitica = !acepta; 
  }

  like() {
    this.meGusta = !this.meGusta;
  }

}
