import { Component } from '@angular/core';
import { Ticket } from 'src/app/shared/models/ticket.model';
import { TicketsService } from 'src/app/shared/services/tickets.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ])
  ]

})
export class TicketsComponent {

  constructor(private ticketService: TicketsService) {}

  tickets: Array<Ticket> = this.ticketService.getTickets()
}
