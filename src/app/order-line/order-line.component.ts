import { Component } from '@angular/core';
import { OrderLineData } from '../data/order-line-data';
import { OrderLineService } from '../service/order-line.service';

@Component({
  selector: 'app-order-line',
  standalone: true,
  imports: [],
  templateUrl: './order-line.component.html',
  styleUrl: './order-line.component.css'
})
export class OrderLineComponent {
  orderLineData: OrderLineData = new OrderLineData();

  constructor(private orderLineService: OrderLineService){}

  addToCart(): void {
    this.orderLineService.createOrderLine(new OrderLineData()).subscribe (result => {
      console.log('product added to cart')
    });
  }

}
