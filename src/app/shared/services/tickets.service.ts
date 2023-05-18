import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor() { }

  ticket: Array<Ticket> = [
    {
      campeonato: "CAMPEONATO BRASILEIRO",
      estadio: "Mineirão | Belo Horizonte - MG",
      dia: "28|05|2023 - 21:30",
      clubeUm: "CRU",
      imgUm: "https://s3-sa-east-1.amazonaws.com/sgegeo/images/clubes/img_16.png",
      clubeDois: "FLU",
      imgDois: "https://s3-sa-east-1.amazonaws.com/sgegeo/images/clubes/img_19.png"
    },
    {
      campeonato: "CAMPEONATO BRASILEIRO",
      estadio: "Maracanã | Rio de Janeiro - RJ",
      dia: "31|05|2023 - 18:30",
      clubeUm: "FLU",
      imgUm: "https://s3-sa-east-1.amazonaws.com/sgegeo/images/clubes/img_19.png",
      clubeDois: "CUI",
      imgDois: "https://s3-sa-east-1.amazonaws.com/sgegeo/images/clubes/5cb0cca58ce8c.png"
    }
  ]

  getTickets() {
    return this.ticket
  }
  
}
