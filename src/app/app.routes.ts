import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    title: 'Home',
    path: 'home',
    loadComponent: () => import('../app/pages/home/home.component')
  }
]
