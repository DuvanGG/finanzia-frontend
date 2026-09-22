import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'transactions',
    loadComponent: () => import('./features/transactions/transactions').then((m) => m.Transactions),
  },
  {
    path: 'budgets',
    loadComponent: () => import('./features/budgets/budgets').then((m) => m.Budgets),
  },
  {
    path: 'goals',
    loadComponent: () => import('./features/goals/goals').then((m) => m.Goals),
  },
  {
    path: 'reports',
    loadComponent: () => import('./features/reports/reports').then((m) => m.Reports),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register').then((m) => m.Register),
  },
  { path: '**', redirectTo: '' },
];