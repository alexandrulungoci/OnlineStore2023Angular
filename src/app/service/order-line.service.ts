import { Injectable } from '@angular/core';
import { OrderLineData } from '../data/order-line-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {

  constructor(private httpClient: HttpClient) { }

  public createOrderLine(orderLineData: OrderLineData): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/addOrderLine', orderLineData);
  }

  public deleteFromCart(userId: number, orderLineId: number): Observable<any>{
    return this.httpClient.delete<any>('http://localhost:8080/deleteOrderLineFromCart/' + userId + '/' + orderLineId);
  }

  public updateOrderLine(orderLine: OrderLineData, userId: any): Observable<any> {
    return this.httpClient.put('http://localhost:8080/updateOrderLine/' + userId, orderLine, userId)
  }

  public getOrderLine(id: number):Observable <OrderLineData>{
    return this.httpClient.get<OrderLineData>('http://localhost:8080/getOrderLine/' + id);
  }
}
