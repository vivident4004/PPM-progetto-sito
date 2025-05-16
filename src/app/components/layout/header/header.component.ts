import {Component, HostListener, OnInit, OnDestroy, Inject, PLATFORM_ID} from "@angular/core";
import {CommonModule, isPlatformBrowser} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MenuButtonComponent} from "../../menu-button/menu-button.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MenuButtonComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit, OnDestroy {
  // Flags for controlling menu visibility
  isMobileMenuOpen = false;
  isMoreRubricsMenuOpen = false;
  isNewslettersMenuOpen = false;
  isActuLocalesMenuOpen = false;
  isNavHidden = false;
  lastScrollTop = 0;
  scrollThreshold = 10; // Minimum scroll amount to trigger header hide/show
  isMobileOrTablet = false; // Flag to check if we're in mobile/tablet view
  resizeObserver: ResizeObserver | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit(): void {
    // Check screen size initially
    this.checkScreenSize();

    // Update body padding initially
    if (isPlatformBrowser(this.platformId)) {
      this.updateBodyPadding();
    }

    // Add an event listener to check screen size on resize
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', this.checkScreenSize.bind(this));
    }
  }


  /**
   * Update body padding to account for fixed header and bottom navigation
   */
  updateBodyPadding(): void {
    let headerHeight = '173px';
    let bottomPadding = '0px';

    if (window.innerWidth <= 768) {
      headerHeight = '88px';
      bottomPadding = '52px'; // Add padding for bottom navigation
    } else if (window.innerWidth <= 1024) {
      headerHeight = '96px';
      bottomPadding = '52px'; // Add padding for bottom navigation
    }

    document.body.style.paddingTop = headerHeight;
    document.body.style.paddingBottom = bottomPadding;
  }

  ngOnDestroy(): void {
    // Clean up the observer when component is destroyed
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    // Remove the event listener when the component is destroyed
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.checkScreenSize.bind(this));
    }
  }

  /**
   * Check if the screen is mobile or tablet size and update body padding
   */
  checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileOrTablet = window.innerWidth < 1024;
      this.updateBodyPadding(); // Update body padding when screen size changes
    }
  }

  /**
   * Listen for scroll events to hide/show header
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    // Determine a scroll direction and apply a threshold
    if (currentScrollTop > this.lastScrollTop + this.scrollThreshold) {
      // Scrolling down
      this.isNavHidden = true;
    } else if (currentScrollTop < this.lastScrollTop - this.scrollThreshold) {
      // Scrolling up
      this.isNavHidden = false;
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }

  /**
   * Toggles the mobile menu state
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Close the more rubrics menu when mobile menu is opened
    if (this.isMobileMenuOpen) {
      this.isMoreRubricsMenuOpen = false;
      // Prevent page scrolling when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore page scrolling when mobile menu is closed
      document.body.style.overflow = '';
    }
  }

  /**
   * Toggles the more rubrics menu state
   */
  toggleMoreRubricsMenu(): void {
    this.isMoreRubricsMenuOpen = !this.isMoreRubricsMenuOpen;

    // Close other menus when opening this one
    if (this.isMoreRubricsMenuOpen) {
      this.isNewslettersMenuOpen = false;
      this.isActuLocalesMenuOpen = false;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
   * Toggles the newsletters menu state
   */
  toggleNewslettersMenu(): void {
    this.isNewslettersMenuOpen = !this.isNewslettersMenuOpen;

    // Close other menus when opening this one
    if (this.isNewslettersMenuOpen) {
      this.isMoreRubricsMenuOpen = false;
      this.isActuLocalesMenuOpen = false;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
   * Toggles the actu locales menu state
   */
  toggleActuLocalesMenu(): void {
    this.isActuLocalesMenuOpen = !this.isActuLocalesMenuOpen;

    // Close other menus when opening this one
    if (this.isActuLocalesMenuOpen) {
      this.isMoreRubricsMenuOpen = false;
      this.isNewslettersMenuOpen = false;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
   * Handle document clicks to close menus when clicking outside
   * @param event The click event
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // Get the clicked element
    const clickedElement = event.target as HTMLElement;

    // Check if the click was on a menu button or inside a menu
    const isMenuButtonClick = clickedElement.closest('app-menu-button') !== null;
    const isMoreRubricsButtonClick = clickedElement.closest('.more-rubrics-button') !== null;
    const isNewslettersButtonClick = clickedElement.closest('.newsletters-button') !== null;
    const isActuLocalesButtonClick = clickedElement.closest('.actu-locales-button') !== null;
    const isMobileMenuClick = clickedElement.closest('.mobile-menu') !== null;
    const isMoreRubricsMenuClick = clickedElement.closest('.more-rubrics-menu') !== null;
    const isNewslettersMenuClick = clickedElement.closest('.newsletters-menu') !== null;
    const isActuLocalesMenuClick = clickedElement.closest('.actu-locales-menu') !== null;

    // Close mobile menu if click was outside the menu and not on the menu button
    if (this.isMobileMenuOpen && !isMobileMenuClick && !isMenuButtonClick) {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    }

    // Close more rubrics menu if click was outside the menu and not on the more rubrics button
    if (this.isMoreRubricsMenuOpen && !isMoreRubricsMenuClick && !isMoreRubricsButtonClick) {
      this.isMoreRubricsMenuOpen = false;
      document.body.style.overflow = '';
    }

    // Close newsletters menu if click was outside the menu and not on the newsletters button
    if (this.isNewslettersMenuOpen && !isNewslettersMenuClick && !isNewslettersButtonClick) {
      this.isNewslettersMenuOpen = false;
      document.body.style.overflow = '';
    }

    // Close actu locales menu if click was outside the menu and not on the actu locales button
    if (this.isActuLocalesMenuOpen && !isActuLocalesMenuClick && !isActuLocalesButtonClick) {
      this.isActuLocalesMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
}
