import { Component, OnInit, Input } from '@angular/core';
import { CategoryData } from '../data/category-data';
import { CategoryService } from '../service/category.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
  //  ReactiveFormsModule,
    FormsModule
   
  ],
  templateUrl: './category.component.html', 
  styleUrl: './category.component.css',
  
})
 export class CategoryComponent implements OnInit{

 // @Input() categoryData!: CategoryData;
  

  categories: CategoryData[] = [];
   public category : CategoryData = new CategoryData();
  

  constructor( private router: Router,
                private categoryService: CategoryService) {
                
                }

  ngOnInit(): void { 
      this.categoryService.getAllCategories().subscribe(receivedCategories => {
        this.categories = receivedCategories;
      });
    }

      delete(id: number): void {
        this.categoryService.deleteCategory(id).subscribe (message => {
            this.ngOnInit();
            console.log(message);
        });
      }

      public addCategory():void {
        this.categoryService.addCategory(this.category).subscribe(result =>{
        this.ngOnInit();
        })
      }

      public updateCategory(): void {{
       this.categoryService.updateCategory(this.category).subscribe(categoryUpdate=>{
        console.log(this.category);
       });
        
      }}
  
    // this.categoryService.getAllCategories.subscribe(receivedCategories => {
    //   this.categories = receivedCategories;
    // });
  }


