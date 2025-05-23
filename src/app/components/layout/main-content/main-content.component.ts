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
  loremShort = 'Consectetur adipiscing elit.';

  ngOnInit(): void {
    this.loadPlaceholderData();
  }

  postVideoPiccoli = [{
    key: 0,
    image: 'https://placehold.co/186x105?text=Video+Placeholder',
    alt: 'Video Placeholder',
    title: 'Lorem ipsum dolor sit amet',
  },
    {
      key: 1,
      image: 'https://placehold.co/186x105?text=Video+Placeholder',
      alt: 'Video Placeholder',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      key: 2,
      image: 'https://placehold.co/186x105?text=Video+Placeholder',
      alt: 'Video Placeholder',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      key: 3,
      image: 'https://placehold.co/186x105?text=Video+Placeholder',
      alt: 'Video Placeholder',
      title: 'Lorem ipsum dolor sit amet',
    }]

  flashCategories = ['Actualité', 'Économie', 'Sport'];

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

  selectedFlashCategory = 'Actualité';
  // Articoli flash per categoria
  flashArticlesByCategory: { [key: string]: Article[] } = {
    'Actualité': [],
    'Économie': [],
    'Sport': []
  };

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
        title: `Small Picture: ${this.loremTitle}`,
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
        video: true,
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
      {
        id: 'center7',
        type: 'small-picture',
        imageWidth: 136,
        imageHeight: 77,
        title: `${this.loremTitle}`,
        standfirst: `${this.loremStandfirst}`,
        premium: false,
      },
      {
        id: 'center8',
        type: 'big-picture',
        imageWidth: 376,
        imageHeight: 212,
        title: `${this.loremTitle}`,
        standfirst: `${this.loremStandfirst}`,
        premium: false,
      },
      {
        id: 'center9',
        type: 'small-picture',
        imageWidth: 136,
        imageHeight: 77,
        title: `${this.loremTitle}`,
        standfirst: `${this.loremStandfirst}`,
        premium: false,
      },
      {
        id: 'center10',
        type: 'big-picture',
        imageWidth: 376,
        imageHeight: 212,
        title: `${this.loremTitle}`,
        standfirst: `${this.loremStandfirst}`,
        premium: false,
      },
      {
        id: 'center11',
        type: 'small-picture',
        imageWidth: 136,
        imageHeight: 77,
        title: `${this.loremTitle}`,
        standfirst: `${this.loremStandfirst}`,
        premium: false,
      },
      {
        id: 'center12',
        type: 'big-picture',
        imageWidth: 376,
        imageHeight: 212,
        title: `${this.loremTitle}`,
        standfirst: `${this.loremStandfirst}`,
        premium: false,
      },
      {
        id: 'center13',
        type: 'small-picture',
        imageWidth: 136,
        imageHeight: 77,
        title: `Nuovo Articolo Tipo 1: ${this.loremTitle}`,
        standfirst: `${this.loremStandfirst}`,
        premium: false,
      },
      {
        id: 'center14',
        type: 'big-picture',
        imageWidth: 376,
        imageHeight: 212,
        title: `${this.loremTitle}`,
        standfirst: `${this.loremStandfirst}`,
        premium: false,
      },
      {
        id: 'center15',
        type: 'small-picture',
        imageWidth: 136,
        imageHeight: 77,
        title: `${this.loremTitle}`,
        standfirst: `${this.loremStandfirst}`,
        premium: false,
      },
      {
        id: 'center16',
        type: 'big-picture',
        imageWidth: 376,
        imageHeight: 212,
        title: `${this.loremTitle}`,
        standfirst: `${this.loremStandfirst}`,
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
        imageWidth: 248, // 1024-1280
        imageHeight: 139,
        title: `Zone Left 1: ${this.loremTitle}`,
        premium: true,
        slug: 'RÉCIT',
      },
      {
        id: 'left3',
        type: 'zone-left',
        imageWidth: 248,
        imageHeight: 139,
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
        imageWidth: 248,
        imageHeight: 139,
        title: `Zone Left 3: ${this.loremTitle}`,
        premium: true,
        slug: 'ENQUÊTE',
      },
      {
        id: 'left6',
        type: 'zone-left',
        imageWidth: 248,
        imageHeight: 139,
        title: `Zone Left 4: ${this.loremTitle}`,
        premium: false,
        slug: 'MÉTÉO',
      },
      {
        id: 'left7',
        type: 'zone-left',
        imageWidth: 248,
        imageHeight: 139,
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

  // Metodo per cambiare categoria
  onFlashCategoryChange(category: string): void {
    this.selectedFlashCategory = category;
  }

  // Metodo per ottenere gli articoli della categoria selezionata
  getFlashArticlesByCategory(): Article[] {
    return this.flashArticlesByCategory[this.selectedFlashCategory] || [];
  }

  getLeftArticlesForMobile(): Article[] {
    // Esclude il tipo 'radio-placeholder' e prende i primi 2
    const originalArticles = this.leftColumnArticles
      .filter((a) => a.type !== 'radio-placeholder')
      .slice(0, 2);

    // Trasforma gli articoli per la vista mobile
    return originalArticles.map(original => ({
      ...original, // Copia tutte le proprietà originali (id, title, standfirst, slug, premium etc.)
      type: 'mobile-selection-item', // <-- Assegna il nuovo tipo
      imageWidth: 282,
      imageHeight: 159,
    }));
  }
}
