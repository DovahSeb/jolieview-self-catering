import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  private seychellesImages = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img1.jpg',
  ];

  private oneBedroomImages = [
    'https://source.unsplash.com/featured/?apartment,interior',
    'https://source.unsplash.com/featured/?apartment,bedroom',
    'https://source.unsplash.com/featured/?apartment,livingroom',
  ];

  private familyApartmentImages = [
    '/images/img_family_apt1.jpg',
    '/images/img_family_apt2.jpg',
    '/images/img_family_apt3.jpg',
  ];

// Signals
selectedImage = signal<string | null>(null);
imageList = signal<string[]>([]);
selectedIndex = signal<number>(0);

seychelles = () => this.seychellesImages;
oneBedroom = () => this.oneBedroomImages;
familyApartment = () => this.familyApartmentImages;

openLightbox(image: string) {
  const list = [...this.seychellesImages, ...this.oneBedroomImages, ...this.familyApartmentImages];
  this.imageList.set(list);
  this.selectedIndex.set(list.indexOf(image));
  this.selectedImage.set(image);
}

closeLightbox() {
  this.selectedImage.set(null);
  this.selectedIndex.set(0);
}

isLightboxOpen() {
  return this.selectedImage() !== null;
}

previousImage() {
  const index = (this.selectedIndex() - 1 + this.imageList().length) % this.imageList().length;
  this.selectedIndex.set(index);
  this.selectedImage.set(this.imageList()[index]);
}

nextImage() {
  const index = (this.selectedIndex() + 1) % this.imageList().length;
  this.selectedIndex.set(index);
  this.selectedImage.set(this.imageList()[index]);
}
}
