import { CommonModule,  } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CategoryData } from '../data/category-data';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../service/product.service';
import { ProductData } from '../data/product-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,
            FormsModule,
            RouterLink,
            RouterOutlet],
  templateUrl: "./product.component.html",
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  
  productList: ProductData[] = [];
  // productList1: ProductData[] = [];
  product: ProductData = new ProductData();
  categories: CategoryData[] = [];


  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
    
  }


   ngOnInit(): void {
    this.productService.getAllProducts().subscribe(receivedProducts => {
      this.productList = receivedProducts;
    })

    // this.productService.getProductsByCategory(2).subscribe(receivedProdByCat => {
    //   this.productList1 = receivedProdByCat;
    // })

    this.categoryService.getAllCategories().subscribe(receivedCategories => {
      this.categories = receivedCategories;
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

    

  
  // constructor() {
  //   const categoryDataId = Number(this.route.snapshot.params['id']);
  //   this.categoryData = this.categoryService.getCategoryById(categoryDataId);
  // }

}
