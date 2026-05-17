import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userName = 'Mostafa';

  openTickets = 12;
  inProgressTickets = 5;
  resolvedTickets = 28;
}