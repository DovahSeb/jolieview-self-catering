import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  private route = inject(ActivatedRoute);
  private router = inject(Router);

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

  private seychellesImages = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg',
    'images/img7.jpeg',
  ];

  activeCategory = signal<'all' | 'jolieView' | 'oneBedroom' | 'familyApartment' | 'seychelles'>('all');
  selectedImage = signal<string | null>(null);
  imageList = signal<string[]>([]);
  selectedIndex = signal<number>(0);

  jolieView = () => this.jolieViewImages;
  oneBedroom = () => this.oneBedroomImages;
  familyApartment = () => this.familyApartmentImages;
  seychelles = () => this.seychellesImages;

  filteredImages = computed(() => {
    const category = this.activeCategory();
    if (category === 'jolieView') return this.jolieViewImages;
    if (category === 'oneBedroom') return this.oneBedroomImages;
    if (category === 'familyApartment') return this.familyApartmentImages;
    if (category === 'seychelles') return this.seychellesImages;
    return [
      ...this.jolieViewImages,
      ...this.oneBedroomImages,
      ...this.familyApartmentImages,
      ...this.seychellesImages,
    ];
  });

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const category = params['category'] as 'all' | 'jolieView' | 'oneBedroom' | 'familyApartment' | 'seychelles';
      if (category) {
        this.setCategory(category);
        this.router.navigate([], { queryParams: {} });
      }
    });
  }

  setCategory(category: 'all' | 'jolieView' | 'oneBedroom' | 'familyApartment' | 'seychelles') {
    this.activeCategory.set(category);
  }

  openLightbox(image: string) {
    const list = [...this.jolieViewImages, ...this.oneBedroomImages, ...this.familyApartmentImages, ...this.seychellesImages];
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