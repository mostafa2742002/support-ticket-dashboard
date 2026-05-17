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

  recentTickets = [
    {
      id: 1,
      title: 'Login issue',
      priority: 'HIGH',
      status: 'OPEN',
      customer: 'Ahmed Hassan'
    },
    {
      id: 2,
      title: 'Payment failed',
      priority: 'HIGH',
      status: 'OPEN',
      customer: 'Sara Ali'
    },
    {
      id: 3,
      title: 'Cannot reset password',
      priority: 'MEDIUM',
      status: 'IN_PROGRESS',
      customer: 'Omar Khaled'
    }
  ];

  tableMessage = '';
  searchText = '';

  showAllTickets() {
    this.tableMessage = 'Showing all tickets...';
  }
}