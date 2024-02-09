import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { OrderLineService } from '../service/order-line.service';
import { CartData } from '../data/cart-data';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../service/order.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,
            RouterLink,
            RouterOutlet],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

    cart: CartData | undefined ;

  constructor(private cartService: CartService,
    private orderLineService: OrderLineService,
    private orderService:OrderService,
    ) { }


  ngOnInit(): void {
    const id = 1;
    this.cartService.getCart(id).subscribe(receivedCart => {
      this.cart = receivedCart;
    });
  }

  deleteFromCart(userId:number, orderLineId: number): void {
    this.orderLineService.deleteFromCart(userId, orderLineId).subscribe(message => {
      this.ngOnInit();
      console.log(message);
    })
   }

   addOrder() {
    const userId = 1;
    this.orderService.addOrder(userId).subscribe(message => {
      console.log(message);
    })
   }

}


