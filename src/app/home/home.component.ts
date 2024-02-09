import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { CategoryData } from '../data/category-data';
//import { ProductComponent } from '../product/product.component';
import { CategoryService } from '../service/category.service';
import { privateDecrypt } from 'crypto';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductData } from '../data/product-data';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    
  //  ProductComponent,
    RouterLink, 
    RouterOutlet
  ],
  template: `
    <h1>
      Wellcome to OnlineStore 2023
  </h1>

  <div>
  <a [routerLink]="['/categories']">Categories</a>
  <a [routerLink]="['/products']">Add product / All products</a>
  <a [routerLink]="['/user-register']">User register</a>
  <a [routerLink]="['/cart']">View cart</a>
  <a [routerLink]="['/orders']">View orders</a>
  </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // categoryList: CategoryData[] = [];
  // categoryService: CategoryService = inject(CategoryService);
  

  // constructor() {
    
  // }

  }

  //constructor() {}

    // ngOnInit():void {
    //     this.categoryService.getAllCategories().subscribe(receivedCategories => {
    //       this.categoryList = receivedCategories;
    //     });

    // }
   // this.categoryDataList = this.categoryService.getAllCategories();
  

