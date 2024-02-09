import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLineUpdateComponent } from './order-line-update.component';

describe('OrderLineUpdateComponent', () => {
  let component: OrderLineUpdateComponent;
  let fixture: ComponentFixture<OrderLineUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderLineUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderLineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
