import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'exhibit',
    loadComponent: ()=>import('./exhibit-details/exhibit-details.component').then((m)=>m.ExhibitDetailsComponent)
  },
  {
    path: 'info',
    loadComponent: ()=>import('./info-display/info-display.component').then((m)=>m.InfoDisplayComponent)
  }
];
