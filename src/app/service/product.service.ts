import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

readonly _domain = "https://localhost:44360";

  formData : Product
  constructor(private http:HttpClient) { }

  loadProduct(){
    return this.http.get(this._domain+"/api/Products");
  };

  insertProduct(){
    return this.http.post(this._domain+"/api/Products",this.formData);
  };

  updateProduct(){
    return this.http.put(this._domain+"/api/Products/"+this.formData.id,this.formData);
  }

  deleteProduct(id:any){
    return this.http.delete(this._domain+"/api/Products/"+id);
  }
  getOneP(id:any){
    return this.http.get(this._domain+"/api/Products/"+id);
  }
}
