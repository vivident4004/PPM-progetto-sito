import { Component } from '@angular/core';
import {SezioneFinaleComponent} from './sezione-finale/sezione-finale.component';
import {ListaArticoliComponent} from './lista-articoli/lista-articoli.component';

@Component({
  selector: 'app-main-content',
  imports: [
    SezioneFinaleComponent,
    ListaArticoliComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  listaArticoli: ArticoloData[] = [
    {
      title: 'Principale',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://placehold.co/400x225?text=Articolo+1',
      altText: 'Immagine descrittiva dell\'articolo 1',
      tv: false,
      sezione: false,
    },
    {
      title: 'Articolo 2',
      summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://placehold.co/400x225?text=Articolo+2',
      altText: 'Immagine descrittiva dell\'articolo 2',
      tv: false,
      sezione: true,
    },
    {
      title: 'Articolo 3',
      imageUrl: 'https://placehold.co/400x225?text=Articolo+3',
      altText: 'Immagine descrittiva dell\'articolo 3',
      summary: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      tv: false,
      sezione: true,
    },
    {
      title: 'Articolo 4',
      imageUrl: 'https://placehold.co/400x225?text=Articolo+4',
      altText: 'Immagine descrittiva dell\'articolo 4',
      summary: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      tv: true,
      sezione: false,
    },
  ];
}

export interface ArticoloData {
  title: string;
  summary?: string;
  imageUrl?: string;
  altText?: string; // "?" vuol dire che è opzionale e può essere nullable
  tv?: boolean;
  sezione?: boolean;
}
