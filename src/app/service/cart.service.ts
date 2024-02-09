import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartData } from '../data/cart-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  public getCart(id: number):Observable <CartData>{
    return this.httpClient.get<CartData>('http://localhost:8080/findByUserModel_Id/' + id);
  }
}
