import { Component, OnInit } from '@angular/core';
import { AddressData } from '../data/address-data';
import { AddressService } from '../service/address.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router} from '@angular/router';



@Component({
  selector: 'app-address',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,
            CommonModule,
            RouterLink,
            RouterOutlet,
          
          ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit{
  public address: AddressData = new AddressData();

  constructor (private addressService: AddressService) {}

  ngOnInit(): void { 
    console.log("address added");
  }

  public addAddress():void {
    this.addressService.addAddress(this.address).subscribe(result =>{
    this.ngOnInit();
    })
  }

}
