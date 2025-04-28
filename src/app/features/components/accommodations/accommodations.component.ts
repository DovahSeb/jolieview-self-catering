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
      category: 'oneBedroom',
      name: 'One-Bedroom Apartment',
      surface: '45m²',
      capacity: 'Up to 3 guests',
      description:
        'Our cozy one-bedroom apartment is perfect for couples or solo travelers. Enjoy comfort and privacy with a fully equipped kitchen, private terrace, and breathtaking island views.',
      image: 'images/img_one_bedroom1.jpg',
      amenities: ['Ocean View', 'Wi-Fi', 'Air Conditioning', 'Hair Dryer', 'Fridge', 'Safe', 'Ironing Facilities', 'Fully Equipped Kitchen', 'Extra Bed on request']
    },
    {
      id: 2,
      category: 'familyApartment',
      name: 'Two Bedroom Family Apartment',
      surface: '80m²',
      capacity: 'Up to 6 guests',
      description:
        'The Two Bedroom Family Apartment is ideal for larger groups or families. It includes two sleeping areas, a large terrace for a serene tropical stay.',
      image: 'images/img_family_apt1.jpg',
      amenities: ['Ocean View', 'Wi-Fi', 'Air Conditioning', 'Hair Dryer', 'Fridge', 'Safe', 'Ironing Facilities', 'Fully Equipped Kitchen', 'Extra Bed on request']
    },
  ];
}
