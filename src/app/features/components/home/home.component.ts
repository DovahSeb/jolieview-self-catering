import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  galleryImages = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
  ];
}
