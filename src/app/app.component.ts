import { Component } from '@angular/core';

// Importa i componenti che usi nel template
import { HeaderComponent } from './components/layout/header/header.component';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root', // i selector sono come i tag
  // es: app-footer per il footer, o app-post per i post
  // ng c nome-componente
  // ng s nome-servizio // servono per interfacciarmi col server,
  standalone: true, // Assicurati che sia true, dalla 19 sono da sé (standalone)
  imports: [
    // Aggiungi qui i componenti usati nel template HTML
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', // o .css
})
export class AppComponent {
  title = 'lefigaro-clone';
}
