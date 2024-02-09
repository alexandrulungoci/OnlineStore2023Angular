import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../service/user-register.service';
import { UserData } from '../data/user-data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddressData } from '../data/address-data';
import { AddressService } from '../service/address.service';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [FormsModule,
            CommonModule,
            RouterLink,
            RouterOutlet],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent{

  public user: UserData = new UserData();
  public addresses :AddressData[] = [];

  constructor(private userRegisterService: UserRegisterService,
              private addressService: AddressService) {
    
  }

  ngOnInit(): void {
    this.addressService.getAllAddresses().subscribe(receivedAddresses => {
      this.addresses = receivedAddresses;
    })
  }
    

  public addUser():void {
    this.userRegisterService.addUser(this.user).subscribe(result =>{
    this.ngOnInit();
    })
  }


}
