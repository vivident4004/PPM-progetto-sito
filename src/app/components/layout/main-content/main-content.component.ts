import {Component, OnInit} from '@angular/core';
import {Article} from '../../../article.model'; // Assicurati che il percorso sia corretto
import {CommonModule} from '@angular/common';
import {ListaArticoliComponent} from './lista-articoli/lista-articoli.component'; // Importa ListaArticoliComponent
import {MatButtonModule} from '@angular/material/button'; // Per il bottone Angular Material
import {MatIconModule} from '@angular/material/icon'; // Per le icone (es. radio)
import {PostComponent} from '../../post/post.component';
import {FlashSelectorComponent} from '../../flash-selector/flash-selector.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    ListaArticoliComponent,
    MatButtonModule,
    MatIconModule,
    PostComponent,
    MatSlideToggleModule,
    FlashSelectorComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements OnInit {
  centerColumnArticles: Article[] = [];
  leftColumnArticles: Article[] = [];
  rightColumnArticles: Article[] = [];

  // Placeholder Lorem Ipsum
  loremTitle = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';
  loremStandfirst =
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  loremLongStandfirst =
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  loremShort = 'Consectetur adipiscing elit.';
  flashCategories = ['Actualité', 'Économie', 'Sport'];
  selectedFlashCategory = 'Actualité';
  // Articoli flash per categoria
  flashArticlesByCategory: { [key: string]: Article[] } = {
    'Actualité': [],
    'Économie': [],
    'Sport': []
  };
  postVideoPiccoli = [{
    image: 'https://placehold.co/186x105?text=Video+Placeholder',
    alt: 'Video Placeholder',
    title: 'Lorem ipsum dolor sit amet',
  },
    {
      image: 'https://placehold.co/186x105?text=Video+Placeholder',
      alt: 'Video Placeholder',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      image: 'https://placehold.co/186x105?text=Video+Placeholder',
      alt: 'Video Placeholder',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      image: 'https://placehold.co/186x105?text=Video+Placeholder',
      alt: 'Video Placeholder',
      title: 'Lorem ipsum dolor sit amet',
    }]

  ngOnInit(): void {
    this.loadPlaceholderData();
  }

  loadPlaceholderData(): void {
    // --- Colonna Centrale ---
    this.centerColumnArticles = [
      {
        id: 'center1',
        type: 'highlight',
        imageWidth: 616, // >1024
        imageHeight: 347,
        title: `Highlight: ${this.loremTitle}`,
        standfirst: this.loremStandfirst,
        time: 'Publié il y a 10 min',
        video: true,
        premium: false,
      },
      {
        id: 'center2',
        type: 'big-picture',
        imageWidth: 616, // >1024
        imageHeight: 347,
        title: `Big Picture: ${this.loremTitle}`,
        standfirst: `LE POINT - ${this.loremStandfirst}`,
        premium: false,
      },
      {
        id: 'center3',
        type: 'small-picture',
        imageWidth: 224, // >1024
        imageHeight: 126,
        title: `Small Picture (Premium): ${this.loremTitle}`,
        standfirst: `CHRONIQUE - ${this.loremShort}`,
        premium: true,
      },
      {
        id: 'center4',
        type: 'small-picture',
        imageWidth: 224,
        imageHeight: 126,
        title: `Another Small Picture: ${this.loremTitle}`,
        standfirst: `ANALYSIS - ${this.loremShort}`,
        premium: false,
      },
      {
        id: 'center5',
        type: 'big-picture',
        imageWidth: 616,
        imageHeight: 347,
        title: `Second Big Picture: ${this.loremTitle}`,
        standfirst: `REPORTAGE - ${this.loremStandfirst}`,
        premium: true,
      },
      // Aggiungi altri articoli centrali...
      {
        id: 'center6',
        type: 'small-picture',
        imageWidth: 224,
        imageHeight: 126,
        title: `Yet Another Small: ${this.loremTitle}`,
        standfirst: `INTERVIEW - ${this.loremShort}`,
        premium: false,
      },
    ];

    // --- Colonna Sinistra ---
    this.leftColumnArticles = [
      // Elemento Radio Placeholder
      {
        id: 'left-radio',
        type: 'radio-placeholder', // Tipo specifico
        title: 'Le Figaro Radio', // Titolo fisso
        standfirst: 'EN CE MOMENT: Les Récits du Figaro', // Sottotitolo fisso
        // Non servono dimensioni immagine qui, gestito da CSS/HTML specifico
      },
      // Articoli veri e propri
      {
        id: 'left1',
        type: 'magazine-article',
        imageWidth: 248, // >1280
        imageHeight: 372,
        title: `Magazine: ${this.loremTitle}`,
        premium: true,
        slug: 'EXCLUSIF',
        standfirst: this.loremStandfirst,
      },
      {
        id: 'left2',
        type: 'zone-left',
        imageWidth: 282, // 1024-1280
        imageHeight: 159,
        title: `Zone Left 1: ${this.loremTitle}`,
        premium: true,
        slug: 'RÉCIT',
      },
      {
        id: 'left3',
        type: 'zone-left',
        imageWidth: 282,
        imageHeight: 159,
        title: `Zone Left 2 (Premium): ${this.loremTitle}`,
        premium: true,
        slug: 'DÉCRYPTAGE',
      },
      {
        id: 'left4',
        type: 'magazine-article',
        imageWidth: 248,
        imageHeight: 372,
        title: `Magazine 2: ${this.loremTitle}`,
        premium: false,
        slug: 'MORT DU PAPE FRANÇOIS',
        standfirst: this.loremShort,
      },
      {
        id: 'left5',
        type: 'zone-left',
        imageWidth: 282,
        imageHeight: 159,
        title: `Zone Left 3: ${this.loremTitle}`,
        premium: true,
        slug: 'ENQUÊTE',
      },
      {
        id: 'left6',
        type: 'zone-left',
        imageWidth: 282,
        imageHeight: 159,
        title: `Zone Left 4: ${this.loremTitle}`,
        premium: false,
        slug: 'MÉTÉO',
      },
      {
        id: 'left7',
        type: 'zone-left',
        imageWidth: 282,
        imageHeight: 159,
        title: `Zone Left 5: ${this.loremTitle}`,
        premium: true,
        slug: 'EXCLUSIF', // Può appartenere a categorie esistenti
      },
    ];

    // --- Colonna Destra (Flash News) ---
    this.rightColumnArticles = [];
    for (let i = 1; i <= 15; i++) {
      this.rightColumnArticles.push({
        id: `flash${i}`,
        type: 'flash-news',
        time: new Date(Date.now() - i * 600000).toISOString(), // Orari fittizi scaglionati
        title: `Flash ${i}: ${this.loremShort} ${
          i % 3 === 0 ? 'dolor sit amet' : ''
        }`,
        premium: i % 5 === 0, // Alcuni premium
        url: '#',
        // Non servono imageWidth/imageHeight
      });
    }
    const allFlashArticles: Article[] = [];
    for (let i = 1; i <= 60; i++) {
      const article: Article = {
        id: `flash${i}`,
        type: 'flash-news',
        time: new Date(Date.now() - i * 600000).toISOString(),
        title: `Flash ${i}: ${this.loremShort} ${i % 3 === 0 ? 'dolor sit amet' : ''}`,

        url: '#',
        category: this.flashCategories[i % 3] // Assegna una categoria in modo ciclico
      };
      allFlashArticles.push(article);
    }

    // Distribuisci gli articoli nelle rispettive categorie
    this.flashCategories.forEach(category => {
      this.flashArticlesByCategory[category] = allFlashArticles.filter(
        article => article.category === category
      );
    });

    // Assegna tutti gli articoli alla proprietà rightColumnArticles per compatibilità
    this.rightColumnArticles = allFlashArticles;
  }

  getLeftArticlesForMobile(): Article[] {
    // Esclude il tipo 'radio-placeholder' e prende i primi 2
    //return this.leftColumnArticles
    //  .filter((a) => a.type !== 'radio-placeholder')
    //  .slice(0, 2);
    const originalArticles = this.leftColumnArticles
      .filter((a) => a.type !== 'radio-placeholder')
      .slice(0, 2);

    // Trasforma gli articoli per la vista mobile
    return originalArticles.map(original => ({
      ...original, // Copia tutte le proprietà originali (id, title, standfirst, slug, premium etc.)
      type: 'mobile-selection-item', // <-- Assegna il nuovo tipo
      imageWidth: 104, // <-- Forza la larghezza immagine desiderata
      // Calcola altezza per ~16:9 o usa un valore fisso se preferisci
      imageHeight: Math.round(104 * (9 / 16)), // <-- Forza l'altezza (circa 59px)
      // Rimuovi proprietà che potrebbero interferire se non necessarie qui
      // category: undefined, // Esempio: se non vuoi la categoria qui
    }));
  }

  getLeftArticlesByCategory(slug: string): Article[] {
    return this.leftColumnArticles.filter(
      (a) => a.slug === slug && a.type !== 'radio-placeholder'
    );
  }

  getRadioArticle(): Article | undefined {
    return this.leftColumnArticles.find((a) => a.type === 'radio-placeholder');
  }

  getLeftColumnCategories(): string[] {
    const slugs = this.leftColumnArticles
      .filter((a) => a.type !== 'radio-placeholder' && a.slug) // Escludi radio e articoli senza slug
      .map((a) => a.slug!); // Usa ! perché abbiamo filtrato gli undefined
    return [...new Set(slugs)];
  }

  // Metodo per cambiare categoria
  onFlashCategoryChange(category: string): void {
    this.selectedFlashCategory = category;
  }

  // Metodo per ottenere gli articoli della categoria selezionata
  getFlashArticlesByCategory(): Article[] {
    return this.flashArticlesByCategory[this.selectedFlashCategory] || [];
  }
}
