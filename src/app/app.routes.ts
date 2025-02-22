import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter-page.component';
import { HeroComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
