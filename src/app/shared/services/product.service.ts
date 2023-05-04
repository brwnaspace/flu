import { Injectable } from '@angular/core';
import { Plano } from 'src/app/features/home/models/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Plano> = [
    {
      id: 1,
      name: "PLANO SUB-12",
      description: "Carteirinha personalizada, com experiências exclusivas! Além disso, você terá 10% de desconto nas lojas oficiais. - EXCLUSIVO PARA MENORES DE 12 ANOS",
      price: 10
    },
    {
      id: 2,
      name: "GUERREIRO",
      description: "Você terá 20% de desconto para arquibancadas e prioridade 3 na compra de ingressos. Além disso, você terá 10% de desconto nas lojas oficiais.",
      price: 20
    },
    {
      id: 3,
      name: "ARQUIBA 60%",
      description: "60% de desconto para arquibancadas, prioridade 2 na compra de ingressos, e direito a 1 convidado. Terá também 10% de desconto nas lojas oficiais.",
      price: 50
    },
    {
      id: 4,
      name: "ARQUIBA 100%",
      description: "100% de desconto para arquibancadas, prioridade 1 na compra de ingressos, e direito a 1 convidado. Além disso, você terá 10% de desconto nas lojas oficiais.",
      price: 85
    },
    {
      id: 4,
      name: "MARACANÃ+",
      description: "Você terá 100% de desconto no Maracanã Mais (com buffet) e na arquibancada. Prioridade 1 na compra de ingressos, e direito a 1 convidado. Além disso, você terá 10% de desconto nas lojas oficiais.",
      price: 400
    }
  ]

  constructor() { }

  getProducts() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find((product) => product.id === id)
  }

}
