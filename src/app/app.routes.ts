import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'portfolio', loadComponent: () => import('./portfolio/portfolio').then(m => m.Portfolio) },
  { path: 'portfolio/:id', loadComponent: () => import('./portfolio/project-detail').then(m => m.ProjectDetail) },
  { path: 'resume', loadComponent: () => import('./resume/resume').then(m => m.Resume) },
  { path: 'blog', loadComponent: () => import('./blog/blog').then(m => m.Blog) },
  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.Contact) },
  { path: '**', redirectTo: 'about' }
];
