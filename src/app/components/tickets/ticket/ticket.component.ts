import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../../../models/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  detailsVisible = signal(false);
  data = input.required<Ticket>();
  close = output();

  onToggleDetails() {
    //this.detailsVisible.set(!this.detailsVisible);
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
