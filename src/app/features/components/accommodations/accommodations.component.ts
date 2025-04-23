import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-accommodations',
  standalone: true,
  imports: [],
  templateUrl: './accommodations.component.html',
  styleUrl: './accommodations.component.css'
})
export class AccommodationsComponent {
  apartments = [
    {
      id: 1,
      name: 'Ocean View Studio',
      description:
        'Perfect for couples, this cozy studio features a private balcony with breathtaking views of the Indian Ocean.',
      surface: '35m²',
      capacity: '2 guests',
      image: 'assets/images/studio.jpg',
    },
    {
      id: 2,
      name: '1-Bedroom Apartment',
      description:
        'Ideal for solo travelers or pairs, our one-bedroom apartment includes a full kitchen and tropical garden access.',
      surface: '50m²',
      capacity: '2–3 guests',
      image: 'assets/images/1bedroom.jpg',
    },
    {
      id: 3,
      name: '2-Bedroom Family Suite',
      description:
        'Spacious and family-friendly, this suite offers two bedrooms, a living area, and a veranda surrounded by lush greenery.',
      surface: '75m²',
      capacity: '4 guests',
      image: 'assets/images/2bedroom.jpg',
    },
  ];
}
