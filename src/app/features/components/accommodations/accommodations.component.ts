import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accommodations',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './accommodations.component.html',
  styleUrl: './accommodations.component.css'
})
export class AccommodationsComponent {
  apartments = [
    {
      id: 1,
      name: 'One-Bedroom Apartment',
      surface: '45m²',
      capacity: 'Up to 3 guests',
      description:
        'Our cozy one-bedroom apartment is perfect for couples or solo travelers. Enjoy comfort and privacy with a fully equipped kitchen, private terrace, and breathtaking island views.',
      image: '/images/img_one_bedroom.jpg',
    },
    {
      id: 2,
      name: 'Two Bedroom Family Apartment',
      surface: '80m²',
      capacity: 'Up to 6 guests',
      description:
        'The Family Apartment is ideal for larger groups or families. It includes two sleeping areas, a large terrace, and direct garden access for a serene tropical stay.',
      image: '/images/img_family_apt.jpg',
    },
  ];
}
