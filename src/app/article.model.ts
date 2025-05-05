// src/app/article.model.ts
export interface Article {
  id: string | number; // Per *ngFor trackBy
  type:
    | 'highlight'
    | 'big-picture'
    | 'small-picture'
    | 'magazine-article'
    | 'zone-left'
    | 'flash-news'
    | 'radio-placeholder'
    | 'mobile-selection-item';
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  standfirst?: string; // Opzionale
  category?: string; // Opzionale (es. EXCLUSIF, RÉCIT)
  premium?: boolean; // Opzionale
  video?: boolean; // Opzionale
  time?: string; // Opzionale (es. Publié il y a 26 min o timestamp per flash)
  url?: string; // Opzionale (per i link)
  slug?: string; // Opzionale (per le categorie sinistra)
}
