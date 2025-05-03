import {Component, HostListener, OnInit, OnDestroy, Renderer2, ElementRef} from "@angular/core";
import {CommonModule} from "@angular/common";
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
  isNavHidden = false;
  lastScrollTop = 0;
  scrollThreshold = 10; // Minimum scroll amount to trigger header hide/show
  isMobileOrTablet = false; // Flag to check if we're in mobile/tablet view
  resizeObserver: ResizeObserver | null = null;

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit(): void {
    this.checkScreenSize();
    this.updateBodyPadding();

    // Set up ResizeObserver to detect screen size changes
    this.resizeObserver = new ResizeObserver(() => {
      this.checkScreenSize();
      this.updateBodyPadding();
    });

    this.resizeObserver.observe(document.body);
  }

  /**
   * Update body padding to account for fixed header
   */
  updateBodyPadding(): void {
    let headerHeight = '173px';

    if (window.innerWidth <= 768) {
      headerHeight = '88px';
    } else if (window.innerWidth <= 1024) {
      headerHeight = '96px';
    }

    document.body.style.paddingTop = headerHeight;
  }

  ngOnDestroy(): void {
    // Clean up the observer when component is destroyed
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  /**
   * Check if the screen is mobile or tablet size
   */
  checkScreenSize(): void {
    this.isMobileOrTablet = window.innerWidth < 1024;
  }

  /**
   * Listen for scroll events to hide/show header
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.isMobileOrTablet) {
      // Don't apply scroll behavior on desktop
      this.isNavHidden = false;
      return;
    }

    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Determine scroll direction and apply threshold
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
    }
  }

  /**
   * Toggles the more rubrics menu state
   */
  toggleMoreRubricsMenu(): void {
    this.isMoreRubricsMenuOpen = !this.isMoreRubricsMenuOpen;

    // Control page scroll based on menu state
    if (this.isMoreRubricsMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}
