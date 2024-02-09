import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProductData } from '../data/product-data';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink,
            RouterOutlet,
          ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
    productId = -1;
  product: ProductData = new ProductData;


    constructor(productService: ProductService) {
       this.productId = Number(this.route.snapshot.params['id']);


   productService.getProductById(this.productId).subscribe(receivedProduct => {
    this.product = receivedProduct;
  })
    }

}
