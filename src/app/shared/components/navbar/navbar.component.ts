import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private menuOpen = signal(false);

  isMenuOpen = () => this.menuOpen();
  toggleMenu = () => this.menuOpen.set(!this.menuOpen());
  closeMenu = () => this.menuOpen.set(false);
}
