import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
  isDropdownVisible = false;
  dropdownOpen = false;
  logo = 'assets/logo.png';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDropdownVisible = window.innerWidth <= 768;

      // Add event listeners only in browser
      window.addEventListener('scroll', this.onWindowScroll.bind(this));
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDropdownVisible = window.innerWidth <= 768;
      if (!this.isDropdownVisible) {
        this.dropdownOpen = false; // Close dropdown if resizing to larger screens
      }
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      // Clean up event listeners to avoid memory leaks
      window.removeEventListener('scroll', this.onWindowScroll.bind(this));
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }
}
