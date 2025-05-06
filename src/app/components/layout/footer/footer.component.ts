import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule], // Aggiungi CommonModule agli imports
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  // Dati per il pre-footer (bianco)
  preFooterColumns = [
    {title: 'Lorem Ipsum Dolor', links: ['Lorem', 'Ipsum', 'Dolor Sit']},
    {title: 'Consectetur Adipiscing', links: ['Amet', 'Elit', 'Sed Do']},
    {title: 'Eiusmod Tempor', links: ['Incididunt', 'Labore', 'Et Dolore']},
    {title: 'Magna Aliqua', links: ['Ut Enim', 'Ad Minim', 'Veniam Quis']},
  ];

  // Dati per il footer principale (blu)
  usefulLinks = ['Lorem Ipsum', 'Dolor Sit', 'Amet Consectetur', 'Adipiscing'];
  subscriptionLinks = ['Lorem Ipsum Offer', 'Manage Lorem', 'My Ipsum'];
  appLinks = ['Figaro App: iPhone | Android', 'Figaro Jeux: iPhone | Android'];
  bottomLinks = [
    'Cookies',
    'Plan du site',
    'Confidentialité',
    'CGU',
    'CGV',
    'Mentions légales',
  ];
}
