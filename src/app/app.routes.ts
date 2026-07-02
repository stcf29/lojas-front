import { Routes } from '@angular/router';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fale-conosco',
    component: FaleConoscoComponent
  }
];
