import { Component, inject } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CategoryService } from '../service/category.service';
import { ProductData } from '../data/product-data';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, RouterLink, RouterOutlet } from '@angular/router';
import { OrderLineService } from '../service/order-line.service';
import { OrderLineData } from '../data/order-line-data';
import { Router } from 'express';

@Component({
  selector: 'app-products-by-category',
  standalone: true,
  imports: [CommonModule,
            RouterLink,
          RouterOutlet],
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.css'
})
export class ProductsByCategoryComponent {

  productList: ProductData[] = [];
  // product: ProductData | undefined;
route: ActivatedRoute = inject(ActivatedRoute);
// categoryId = -1;
  category: any;
  product: ProductData |any;
  categoryId = -1;

  constructor(private productService: ProductService,
    private orderLineService: OrderLineService,
    // private route1: Router,
    private categoryService: CategoryService) 
    {
      this.categoryId = Number(this.route.snapshot.params['id']);
      this.category = categoryService.getCategory(this.categoryId);
}



// product: ProductData | any;
//name: string;
//   product: ProductData = new ProductData;


  ngOnInit(): void {
    
    this.productService.getProductsByCategory(this.categoryId).subscribe(receivedProdByCat => {
      this.productList = receivedProdByCat;
    })

  }

   delete(id:number): void {
    this.productService.deleteProduct(id).subscribe(message => {
      this.ngOnInit();
      console.log(message);
    })
   }

   public addProduct():void {
    this.productService.addProduct(this.product).subscribe(result =>{
    this.ngOnInit();
    })
  }

  addToCart(userId:number, productId: number) {
    this.productService.addToCart(userId, productId).subscribe(result =>{
        console.log('product added to cart');
    })
  }
  // addToCart(): void {
  //   // this.product = this.productService.getProduct(product_id)
  //     this.orderLineService.createOrderLine(new OrderLineData()).subscribe(result => {
  //       console.log('Product added to cart');
  //       // this.route1.navigate('product-list');
  //     });
  // }

  // addToCart(_t9: ProductData) {
  //   throw new Error('Method not implemented.');
  //   }
}
