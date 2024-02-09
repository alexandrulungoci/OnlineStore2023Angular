import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryData } from '../data/category-data';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-category-update',
  standalone: true,
  imports: [FormsModule,
            RouterLink,
            RouterOutlet],
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})
export class CategoryUpdateComponent implements OnInit{

  category: CategoryData = new CategoryData ;
  categoryId = -1;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor( private categoryService:CategoryService, private route1: Router )
   {
    this.categoryId = Number(this.route.snapshot.params['id']);
    // this.category = categoryService.getCategory(this.categoryId);
    categoryService.getCategory(this.categoryId).subscribe(receivedCategory => {
      this.category = receivedCategory;
    })

    // productService.getProductById(this.productId).subscribe(receivedProduct => {
    //   this.product = receivedProduct;
    // })
    }

  // ngOnInit(): void {
  //   let id = this.activatedRoutes.snapshot.paramMap.get("id");
  //   console.log("id: " + id);
  //   this.categoryService.getCategory(Number(id)).subscribe(categoryResult => {
  //     this.category = categoryResult;
  //   });
  // }

  ngOnInit(): void {
    // let id = this.activatedRoutes.snapshot.paramMap.get("id");
    // console.log("id: " + id);
    // this.categoryService.getCategory(Number(id)).subscribe(categoryResult => {
    //   this.category = categoryResult;
    // });
    
  }



  public updateCategory(): void{
    this.categoryService.updateCategory(this.category).subscribe(categoryUpdate => {});
    // categoryService.updateCategory(this.category).subscribe(categoryUpdate=>{
    //   console.log(this.category);
     this.route1.navigateByUrl("/categories")
    // });
    
  }


}
