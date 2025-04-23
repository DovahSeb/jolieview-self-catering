import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  galleryImages = [
    '/images/img1.jpg',
    'https://source.unsplash.com/800x600/?seychelles,resort',
    'https://source.unsplash.com/800x600/?seychelles,ocean',
    'https://source.unsplash.com/800x600/?seychelles,apartment',
    'https://source.unsplash.com/800x600/?seychelles,villa',
    'https://source.unsplash.com/800x600/?seychelles,island'
  ];
}
