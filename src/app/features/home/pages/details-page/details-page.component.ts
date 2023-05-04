import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { Plano } from '../../models/product.module';

@Component({
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent {

  product?: Plano

  constructor
    (private activatedRoute: ActivatedRoute,
      private productService: ProductService) {}

      ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
          console.log(params);
          const id = parseInt(params['id'])
          this.product = this.productService.getById(id)
          console.log(this.product);
          
        })
      }

}
