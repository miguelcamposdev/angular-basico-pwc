import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentPadreComponent } from './component-padre/component-padre.component';
import { MaterialModule } from './utils/material.module';
import { ComponentHijoComponent } from './component-hijo/component-hijo.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { PhoneUsuarioComponent } from './phone-usuario/phone-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPadreComponent,
    ComponentHijoComponent,
    TablaUsuariosComponent,
    PhoneUsuarioComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
