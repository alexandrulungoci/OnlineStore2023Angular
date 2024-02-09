import { Component, OnInit } from '@angular/core';
import { OrderData } from '../data/order-data';
import { OrderService } from '../service/order.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  orders: OrderData[] | undefined;

  constructor (private orderService: OrderService) {}
  
  ngOnInit(): void {
    const userId = 1;
    this.orderService.getOrders().subscribe(receivedOrders =>{
      this.orders = receivedOrders;
    })
    throw new Error('Method not implemented.');
  }

  
  }

  


