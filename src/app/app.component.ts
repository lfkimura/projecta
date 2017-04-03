import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> 
  <usuario-form></usuario-form>`,
})
export class AppComponent  { name = 'Angular'; }
