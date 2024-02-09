import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { CategoryComponent } from "./category/category.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { AddressComponent } from "./address/address.component";
import { CategoryUpdateComponent } from "./category-update/category-update.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { ProductsByCategoryComponent } from "./products-by-category/products-by-category.component";
import { OrderLineUpdateComponent } from "./order-line-update/order-line-update.component";
import { OrderComponent } from "./order/order.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'product/:id',
        component: ProductComponent,
        title: 'Products by category' 
    },
    {
        path: 'products',
        component: ProductComponent,
        title: 'Products' 
    },
    {
        path: 'categories',
        component: CategoryComponent,
        title: 'Categories' 
    },
    {
        path: 'user-register',
        component: UserRegisterComponent,
        title: 'User register' 
    },
    {
        path: 'address',
        component: AddressComponent,
        title: 'Add address' 
    },
    {
        path: 'category-update/:id',
        component: CategoryUpdateComponent,
        title: 'Update Category' 
    },
    {
        path: 'product-details/:id',
        component: ProductDetailsComponent,
        title: 'Product details' 
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'View cart' 
    },
    {
        path: 'products-by-category/:id',
        component: ProductsByCategoryComponent,
        title: 'products by category' 
    },
    {
        path: 'orderLine-update/:id',
        component: OrderLineUpdateComponent,
        title: 'orderLine update' 
    },
    {
        path: 'orders',
        component: OrderComponent,
        title: 'orders' 
    },
];

export default routeConfig;