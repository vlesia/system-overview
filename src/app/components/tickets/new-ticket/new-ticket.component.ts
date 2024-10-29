import { Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { TicketData } from '../../../models/ticket-data.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() addTicket = new EventEmitter<TicketData>();
  addTicket = output<TicketData>();


  onSubmit(title: string, ticketText: string) {
    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
    this.addTicket.emit({title: title, text: ticketText});
  }
}
