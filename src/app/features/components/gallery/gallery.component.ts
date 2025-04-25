import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  faXmark = faXmark;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  private seychellesImages = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg',
    'images/img7.jpeg',
  ];

  private jolieViewImages = [
    'images/jolie_view1.jpg',
    'images/jolie_view2.jpg',
    'images/jolie_view3.jpg',
    'images/jolie_view4.jpg',
    'images/jolie_view5.jpg',
  ]

  private oneBedroomImages = [
    'images/img_one_bedroom1.jpg',
    'images/img_one_bedroom2.jpg',
    'images/img_one_bedroom3.jpg',
  ];

  private familyApartmentImages = [
    'images/img_family_apt1.jpg',
    'images/img_family_apt2.jpg',
    'images/img_family_apt3.jpg',
  ];

  activeCategory = signal<'all' | 'seychelles' | 'jolieView' | 'oneBedroom' | 'familyApartment'>('all');

  selectedImage = signal<string | null>(null);
  imageList = signal<string[]>([]);
  selectedIndex = signal<number>(0);

  seychelles = () => this.seychellesImages;
  jolieView = () => this.jolieViewImages;
  oneBedroom = () => this.oneBedroomImages;
  familyApartment = () => this.familyApartmentImages;

  filteredImages = computed(() => {
    const category = this.activeCategory();
    if (category === 'seychelles') return this.seychellesImages;
    if (category === 'jolieView') return this.jolieViewImages;
    if (category === 'oneBedroom') return this.oneBedroomImages;
    if (category === 'familyApartment') return this.familyApartmentImages;
    return [
      ...this.seychellesImages,
      ...this.jolieViewImages,
      ...this.oneBedroomImages,
      ...this.familyApartmentImages,
    ];
  });

  setCategory(category: 'all' | 'seychelles' | 'jolieView' | 'oneBedroom' | 'familyApartment') {
    this.activeCategory.set(category);
  }

  openLightbox(image: string) {
    const list = [...this.seychellesImages, ...this.jolieViewImages, ...this.oneBedroomImages, ...this.familyApartmentImages];
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