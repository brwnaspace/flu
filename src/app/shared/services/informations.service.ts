import { Injectable } from '@angular/core';
import { Information } from '../models/information.model';

@Injectable({
  providedIn: 'root'
})
export class InformationsService {

  information: Array<Information> = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/1077/1077999.png",
      title: "MEU PLANO",
      text: "Você ainda não assinou um plano. Clique para conhecer os planos."
    }, 
    {
      img: "https://cdn-icons-png.flaticon.com/512/3069/3069516.png",
      title: "CARTÕES DE SÓCIO",
      text: "Você ainda não possui Cartões de Sócio ativos."
    }, 
    {
      img: "https://cdn-icons-png.flaticon.com/512/3504/3504016.png",
      title: "EXPERIÊNCIAS",
      text: "Você ainda não tem pontos"
    }
  ]

  getProducts() {
    return this.information;
  }

  constructor() { }
}
