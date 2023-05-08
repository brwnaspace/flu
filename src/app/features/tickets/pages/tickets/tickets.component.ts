import { Component } from '@angular/core';
import { Ticket } from 'src/app/shared/models/ticket.model';
import { TicketsService } from 'src/app/shared/services/tickets.service';

@Component({
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {

  constructor(private ticketService: TicketsService) {}

  tickets: Array<Ticket> = this.ticketService.getTickets()
}
