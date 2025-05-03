import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaccia opzionale per definire la struttura dei dati del post
export interface PostData {
  title: string;
  summary?: string;
  imageUrl?: string;
  category?: string;
  date?: Date;
}

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() postData: PostData | null = null; // Riceve i dati del post
}
