import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';

export const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'visualizacao', component: VisualizacaoComponent },
];
