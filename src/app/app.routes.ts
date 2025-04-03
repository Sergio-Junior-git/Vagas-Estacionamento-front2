import { Routes } from '@angular/router';
import { ComumComponent } from './comum/comum.component';
import { FormComponent } from './form/form.component';
import { VagavipComponent } from './vagavip/vagavip.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: 'vip', component: VagavipComponent },
    { path: 'comum', component: ComumComponent },
    { path: 'new', component: FormComponent },
    { path: 'inicio', component: InicioComponent },
    { path: '', pathMatch:'full', redirectTo: 'inicio'}
];
