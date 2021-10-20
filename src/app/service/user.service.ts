import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
readonly _domain = "https://localhost:44360";

formData : User
  constructor(private http:HttpClient) { }

  loadUser(){
    return this.http.get(this._domain+"/api/Users");
  };

  insertUser(){
    return this.http.post(this._domain+"/api/Users",this.formData);
  };

  updateUser(){
    return this.http.put(this._domain+"/api/Users/"+this.formData.id,this.formData);
  }

  deleteUser(id:any){
    return this.http.delete(this._domain+"/api/Users/"+id);
  }
  loadOneU(id:any){
    return this.http.get(this._domain+"/api/Users/"+id);
  };
}
