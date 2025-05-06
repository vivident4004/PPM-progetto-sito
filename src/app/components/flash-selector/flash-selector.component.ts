// src/app/components/flash-selector/flash-selector.component.ts
import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-flash-selector',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  template: `
    <button mat-button [matMenuTriggerFor]="menu" class="flash-selector-button"
            aria-label="Sélectionner une catégorie de flash">
      <span>{{ categories[selectedCategoryIndex] }}</span>
      <mat-icon>arrow_drop_down</mat-icon>
    </button>
    <mat-menu #menu="matMenu" class="flash-selector-menu">
      <button
        mat-menu-item
        *ngFor="let category of categories; let i = index"
        (click)="selectCategory(i)"
        [class.selected]="i === selectedCategoryIndex">
        <span>{{ category }}</span>
        <mat-icon *ngIf="i === selectedCategoryIndex">check</mat-icon>
      </button>
    </mat-menu>
  `,
  styles: [`
    .flash-selector-button {
      /* Stile basato su .fig-selector-link__link */
      align-items: center;
      flex-direction: row-reverse;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      outline: 1px solid transparent;
      padding: 8px 16px;
      text-decoration: none;
      transition: color .3s ease;

      /* Stili aggiuntivi per il pulsante Material */
      color: #163860;
      font-weight: bold;
      line-height: normal;
      height: auto;
      min-width: 120px;
      background-color: white;
    }

    /* Rimuovo il background e l'effetto ripple di Material */
    ::ng-deep .flash-selector-button .mat-mdc-button-persistent-ripple {
      display: none;
    }

    .flash-selector-button:hover {
      color: #163860;
    }

    .flash-selector-button .mat-icon {
      font-size: 18px;
      height: 18px;
      width: 18px;
      margin-left: 4px;
    }

    ::ng-deep .flash-selector-menu .mat-mdc-menu-item.selected {
      color: #163860;
      font-weight: bold;
    }

    ::ng-deep .flash-selector-menu .mat-mdc-menu-item .mat-icon {
      color: #e60004;
    }
  `]
})
export class FlashSelectorComponent {
  categories: string[] = ['Actualité', 'Économie', 'Sport'];
  selectedCategoryIndex = 0;

  @Output() categoryChange = new EventEmitter<string>();

  selectCategory(index: number): void {
    this.selectedCategoryIndex = index;
    this.categoryChange.emit(this.categories[index]);
  }
}
