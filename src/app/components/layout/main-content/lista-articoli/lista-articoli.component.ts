import {Component, Input} from '@angular/core';
import {Article} from '../../../../article.model'; // Assicurati che il percorso sia corretto
import {CommonModule} from '@angular/common';
import {PostComponent} from '../../../post/post.component'; // Importa il componente figlio

@Component({
  selector: 'app-lista-articoli',
  standalone: true,
  imports: [CommonModule, PostComponent], // Importa CommonModule e PostComponent
  templateUrl: './lista-articoli.component.html',
  styleUrl: './lista-articoli.component.scss',
})
export class ListaArticoliComponent {
  // Riceve l'array di articoli dal componente padre (main-content)
  @Input() articles: Article[] = [];
  @Input() listTitle?: string; // Titolo opzionale per le sezioni della colonna sinistra
  @Input() listClass?: string; // Classe CSS opzionale per il contenitore della lista

  // Funzione per il trackBy di *ngFor per ottimizzare le performance
  trackById(index: number, item: Article): string | number {
    return item.id;
  }
}
