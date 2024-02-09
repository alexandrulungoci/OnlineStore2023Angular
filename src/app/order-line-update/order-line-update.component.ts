import { Component, inject } from '@angular/core';
import { OrderLineData } from '../data/order-line-data';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { OrderLineService } from '../service/order-line.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-line-update',
  standalone: true,
  imports: [FormsModule,
            RouterLink,
            RouterOutlet,
            
  ],
  templateUrl: './order-line-update.component.html',
  styleUrl: './order-line-update.component.css'
})
export class OrderLineUpdateComponent {

  orderLine: OrderLineData = new OrderLineData ;
  orderLineId = -1;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor( private orderLineService: OrderLineService )
   {
    this.orderLineId = Number(this.route.snapshot.params['id']);

    this.orderLineService.getOrderLine(this.orderLineId).subscribe(receivedOrderLine => {
      this.orderLine = receivedOrderLine;
    })
  }

  public updateOrderLine(): void{
    this.orderLineService.updateOrderLine(this.orderLine, 1).subscribe(orderLineUpdate => {
      console.log(this.orderLine);
    });
    // categoryService.updateCategory(this.category).subscribe(categoryUpdate=>{
    //   console.log(this.category);
    //  this.route1.navigateByUrl("/categories")
    // });
    
  }
}
