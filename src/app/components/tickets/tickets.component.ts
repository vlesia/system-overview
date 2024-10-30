import { Component, signal } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from '../../models/ticket.model';
import { TicketData } from '../../models/ticket-data.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets = signal<Ticket[]>([]);

  getId() {
    return (this.tickets().length + 1).toString();
  }

  onAdd(ticketData: TicketData) {
    const ticket: Ticket = {
      id: this.getId(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };
    this.tickets.update((tickets) => [...tickets, ticket]);
    console.log(this.tickets);
  }
}
