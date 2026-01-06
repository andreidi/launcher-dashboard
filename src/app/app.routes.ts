import { Routes } from '@angular/router';

import { DashboardPage } from '@pages/dashboard/dashboard.page';

export const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
  {
    path: 'settings',
    loadComponent: () => import('@pages/settings/settings.page').then((m) => m.SettingsPage),
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
