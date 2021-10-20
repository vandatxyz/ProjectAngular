import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ProductList : {};
  constructor(public product_service : ProductService) { }

  ngOnInit(): void {
  }

  public cart = {
    count: 0
 }

 public addtocart(){
   this.cart.count = this.cart.count +1;
 }
}
