import { Component } from "@angular/core";
import { CommonModule } from "@angular/common"; // Necessario per *ngIf, [ngClass], ecc. in componenti standalone
import { MatButtonModule } from "@angular/material/button"; // Se usi Angular Material per i bottoni
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MenuButtonComponent} from "../../menu-button/menu-button.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIcon, MatIconModule, MenuButtonComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  // Stato esistente per i menu a tendina
  isEditionsLocalesMenuOpen: boolean = false;
  isNewslettersMenuOpen: boolean = false;
  isMobileMenuOpen: boolean = false;

  // Nuovo stato per il menu delle rubriche aggiuntive
  isMoreRubricsMenuOpen: boolean = false;

  constructor() {}

  // Metodi esistenti
  toggleEditionsLocalesMenu(): void {
    this.isEditionsLocalesMenuOpen = !this.isEditionsLocalesMenuOpen;
    if (this.isEditionsLocalesMenuOpen) {
      this.isNewslettersMenuOpen = false;
      this.isMoreRubricsMenuOpen = false; // Chiudi anche il menu delle rubriche aggiuntive
    }
  }

  toggleNewslettersMenu(): void {
    this.isNewslettersMenuOpen = !this.isNewslettersMenuOpen;
    if (this.isNewslettersMenuOpen) {
      this.isEditionsLocalesMenuOpen = false;
      this.isMoreRubricsMenuOpen = false; // Chiudi anche il menu delle rubriche aggiuntive
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Nuovo metodo per gestire il menu delle rubriche aggiuntive
  toggleMoreRubricsMenu(): void {
    this.isMoreRubricsMenuOpen = !this.isMoreRubricsMenuOpen;
    if (this.isMoreRubricsMenuOpen) {
      this.isEditionsLocalesMenuOpen = false;
      this.isNewslettersMenuOpen = false;
      // Non blocchiamo lo scroll dell'intera pagina per evitare spostamenti del layout
    } else {
      // Non è più necessario ripristinare lo scrolling
    }
  }

  closeAllMenus(): void {
    this.isEditionsLocalesMenuOpen = false;
    this.isNewslettersMenuOpen = false;
    this.isMoreRubricsMenuOpen = false; // Aggiungi anche il nuovo menu
  }
}
