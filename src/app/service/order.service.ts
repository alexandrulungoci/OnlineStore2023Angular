import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderData } from '../data/order-data';

 
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  public getOrdersByUserId(id: number):Observable <any>{
    return this.httpClient.get<any>('http://localhost:8080/getOrdersByUserId/' + id);
  }

  public getOrders():Observable <any>{
    return this.httpClient.get<any>('http://localhost:8080/getOrders');
  }

  public addOrder(userId: number): Observable<OrderData>{
    return this.httpClient.post<OrderData>('http://localhost:8080/addOrder/' + userId, {});
  }
}
