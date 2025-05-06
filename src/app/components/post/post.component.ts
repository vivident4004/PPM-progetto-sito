import { Component, Input } from '@angular/core';
import {Article} from '../../article.model';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  // Riceve i dati dell'articolo dal componente padre (lista-articoli)
  @Input() article!: Article;

  // Helper per generare URL placeholder
  getPlaceholderUrl(width: number | undefined, height: number | undefined): string {
    // Gestisci il caso in cui width/height siano undefined fornendo valori di default
    const w = width ?? 100; // Usa 100 se width è undefined
    const h = height ?? 100; // Usa 100 se height è undefined
    return `https://placehold.co/${w}x${h}`;
  }
}
