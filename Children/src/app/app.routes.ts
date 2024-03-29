import { Routes } from '@angular/router';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'dynamic/:id', 
    component:DynamicContentComponent
  }
];
