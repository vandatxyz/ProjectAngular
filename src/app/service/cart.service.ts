import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  formData : Cart
readonly _domain = "https://localhost:44360";

  constructor(private http:HttpClient) { }

  loadCart(){
    return this.http.get(this._domain+"/api/Carts");
  };

  insertCart(data:any){
    return this.http.post(this._domain+"/api/Carts",data);
  };

  updateCart(){
    return this.http.put(this._domain+"/api/Carts/"+this.formData.id,this.formData);
  };

  deleteCart(id:any){
    return this.http.delete(this._domain+"/api/Carts/"+id);
  };

  getOneP(id:any){
    return this.http.get(this._domain+"/api/Carts/"+id);
  }
}
