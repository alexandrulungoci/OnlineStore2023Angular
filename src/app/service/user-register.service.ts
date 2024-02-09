import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../data/user-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private httpClient: HttpClient) { }

  public addUser(userData: UserData): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/addUser', userData);
  }
}
