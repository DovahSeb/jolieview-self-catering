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
    'images/jolie_view1.jpg',
    'images/jolie_view4.jpg',
    'images/jolie_view5.jpg',
  ];
}
