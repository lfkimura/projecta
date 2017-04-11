import { Routes, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from './cadastro/usuario/usuario-form.component';
import { ExcursaoFormComponent } from './cadastro/excursao/excursao-form.component';

const appRoutes:Routes = [
    {path: '', component: UsuarioFormComponent },
    {path: 'cadastro/excursao', component: ExcursaoFormComponent },
    {path: '**', redirectTo: ''}
];


export const routing = RouterModule.forRoot(appRoutes);