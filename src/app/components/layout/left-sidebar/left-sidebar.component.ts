import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  // Sample flash news data
  flashNews = [
    {
      title: 'Flash News 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '10:30'
    },
    {
      title: 'Flash News 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: '09:45'
    },
    {
      title: 'Flash News 3',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      time: '08:15'
    },
    {
      title: 'Flash News 4',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      time: '07:30'
    }
  ];
}
