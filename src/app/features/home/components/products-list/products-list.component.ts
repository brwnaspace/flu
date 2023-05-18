import { Component } from '@angular/core';
import { Plano } from '../../models/product.module';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
 
})
export class ProductsListComponent {

  constructor(private productService: ProductService,
    private router: Router) {

  }

  products: Array<Plano> = this.productService.getProducts()

  detalhesProduto(idProduto: number) {
    this.router.navigateByUrl(`products-details/${idProduto}`)
  } // entra numa rota especificada pelo id do produto

  subscribe() {
    this.router.navigateByUrl('login')
  }
}
