import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { RobotsList } from './pages/robots-list/robots-list';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'robots',
    component: RobotsList
  }

];