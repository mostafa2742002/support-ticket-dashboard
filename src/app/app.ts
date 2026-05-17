import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userName = 'Mostafa';

   stats = [
      {
        label: 'Open Tickets',
        value: 12
      },
      {
        label: 'In Progress',
        value: 5
      },
      {
        label: 'Resolved',
        value: 28
      }
    ];
}