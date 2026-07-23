import { LpTopbabyComponent } from './pages/lp-topbaby/lp-topbaby.component';
import { Routes } from '@angular/router';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageVivazComponent } from './pages/landing-page-vivaz/landing-page-vivaz.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fale-conosco', component: FaleConoscoComponent },
  { path: 'landing-page-vivaz', component: LandingPageVivazComponent },
  { path: 'lp-topbaby', component: LpTopbabyComponent }
];
