import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    HttpClientModule,
    CommonModule,
    CategoryComponent,
    ProductComponent,
    HomeComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    UserRegisterComponent
    
    
  ],
  template: `
  <main>
  <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrl: './app.component.css',
  
  
})
export class AppComponent {
  title = 'onlinestore2023-Angular';
}
