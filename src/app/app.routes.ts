import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter-page.component';
import { HeroComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/drangonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/drangonball-super/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
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
