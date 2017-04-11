import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { UsuarioFormComponent } from './cadastro/usuario/usuario-form.component';
import { ExcursaoFormComponent } from './cadastro/excursao/excursao-form.component';

import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, UsuarioFormComponent, ExcursaoFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
