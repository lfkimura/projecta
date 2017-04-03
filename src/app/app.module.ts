import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { UsuarioFormComponent } from './cadastro/usuario-form.component';
import { ExcursaoFormComponent } from './cadastro/excursao-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UsuarioFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
