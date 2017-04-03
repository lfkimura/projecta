import { Component } from '@angular/core';

import { Excursao }    from './excursao';

@Component({
  selector: 'excursao-form',
  templateUrl: './excursao-form.component.html'
})
export class ExcursaoFormComponent {

  tipos = ['Turismo', 'Negocios',
            'Familiar', 'Diversão'];

  model = new Excursao(1, 'Caribe','Mexico',30,'2017-12-25', this.tipos[1],300);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}