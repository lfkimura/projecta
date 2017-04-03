import { Component } from '@angular/core';

import { Usuario }    from './usuario';

@Component({
  selector: 'usuario-form',
  templateUrl: './usuario-form.component.html'
})
export class UsuarioFormComponent {

  perfis = ['Administrador', 'Viajante'];

  model = new Usuario(1, 'Dr Kimura','lfkimura@gmail.com','luis', this.perfis[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}