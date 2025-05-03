// src/app/components/layout/header/header.component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common"; // Necessario per *ngIf, [ngClass], ecc. in componenti standalone
import { MatButtonModule } from "@angular/material/button"; // Se usi Angular Material per i bottoni
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MenuButtonComponent} from "../../menu-button/menu-button.component";

@Component({
  selector: "app-header",
  standalone: true,
  // Importa CommonModule e altri moduli necessari qui
  imports: [CommonModule, MatButtonModule, MatIcon, MatIconModule, MenuButtonComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  // Stato per i menu a tendina
  isEditionsLocalesMenuOpen: boolean = false;
  isNewslettersMenuOpen: boolean = false;
  // Potrebbe servire uno stato per il menu mobile in futuro
  isMobileMenuOpen: boolean = false;

  constructor() {}

  // Metodi per aprire/chiudere i menu
  toggleEditionsLocalesMenu(): void {
    this.isEditionsLocalesMenuOpen = !this.isEditionsLocalesMenuOpen;
    // Chiudi l'altro menu se è aperto, per evitare sovrapposizioni
    if (this.isEditionsLocalesMenuOpen) {
      this.isNewslettersMenuOpen = false;
    }
  }

  toggleNewslettersMenu(): void {
    this.isNewslettersMenuOpen = !this.isNewslettersMenuOpen;
    if (this.isNewslettersMenuOpen) {
      this.isEditionsLocalesMenuOpen = false;
    }
  }

  // Metodo per il menu mobile (da implementare con la responsività)
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Funzione per chiudere i menu se si clicca altrove (opzionale ma utile)
  // Si può implementare con HostListener o direttive custom
  closeAllMenus(): void {
    this.isEditionsLocalesMenuOpen = false;
    this.isNewslettersMenuOpen = false;
  }
}
