import { Injectable, OnInit } from '@angular/core';
import { ProductData } from '../data/product-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OrderLineData } from '../data/order-line-data';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

 

    constructor(private httpClient: HttpClient) {}

    public getAllProducts(): Observable<ProductData[]> {
      return this.httpClient.get<ProductData[]>('http://localhost:8080/getProducts');
    }

    public getProductById(id: number): Observable<ProductData> {
      return this.httpClient.get<ProductData>('http://localhost:8080/getProduct/' + id)
    }

    public deleteProduct(id:number): Observable<any>{
      return this.httpClient.delete<any>('http://localhost:8080/deleteProduct/' + id);
    }

    public addProduct(productData: ProductData): Observable<any>{
      return this.httpClient.post<any>('http://localhost:8080/addProduct', productData);
    }

    public getProductsByCategory(id: number): Observable<ProductData[]> {
      return this.httpClient.get<ProductData[]>('http://localhost:8080/getProductsByCategory/' + id)
    }

    public addToCart(userId:number, productId:number): Observable<any>{
      return this.httpClient.put<any>('http://localhost:8080/addToCart/' + userId + '/' + productId, {});
      
    }
}
