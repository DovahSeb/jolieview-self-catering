import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faBars = faBars;
  faXmark = faXmark;

  private menuOpen = signal(false);

  isMenuOpen = () => this.menuOpen();
  toggleMenu = () => this.menuOpen.set(!this.menuOpen());
  closeMenu = () => this.menuOpen.set(false);
}
