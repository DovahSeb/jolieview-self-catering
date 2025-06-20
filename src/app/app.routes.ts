import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
      },
      {
        path: 'accommodations',
        loadComponent: () => import('./features/components/accommodations/accommodations.component').then(m => m.AccommodationsComponent),
      },
      {
        path: 'gallery',
        loadComponent: () => import('./features/components/gallery/gallery.component').then(m => m.GalleryComponent),
      },
      {
        path: 'faq',
        loadComponent: () => import('./features/components/faq/faq.component').then(m => m.FaqComponent),
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/components/contact/contact.component').then(m => m.ContactComponent),
      },
      {
        path: '**',
        redirectTo: ''
      }
];
