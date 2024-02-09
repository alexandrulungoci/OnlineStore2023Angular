import { Injectable } from '@angular/core';
import { AddressData } from '../data/address-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient,) { }

  public addAddress(addressData: AddressData): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/addUserAddress', addressData);
  }

  public getAllAddresses(): Observable<AddressData[]> {
    return this.httpClient.get<AddressData[]>('http://localhost:8080/getAllUserAddresses');
  }
}
