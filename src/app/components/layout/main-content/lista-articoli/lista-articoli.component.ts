import {Component, Input} from '@angular/core';
import { ArticoloData } from '../main-content.component';

@Component({
  selector: 'app-lista-articoli',
  imports: [],
  templateUrl: './lista-articoli.component.html',
  styleUrl: './lista-articoli.component.scss'
})
export class ListaArticoliComponent {
  @Input() isFirst?: boolean;
  @Input() articolo?: ArticoloData;
}
