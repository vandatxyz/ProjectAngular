import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

readonly _domain = "https://localhost:44360";


  constructor(private http:HttpClient) { }

  login(data) : Observable<any>{
    return this.http.post(this._domain+'/api/Users',data);
  }
}
