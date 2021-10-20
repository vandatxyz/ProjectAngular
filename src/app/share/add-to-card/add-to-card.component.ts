import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.scss']
})
export class AddToCardComponent implements OnInit {

  constructor(public cart_service : CartService) { }
  CartList : Cart[]=[];
  p:number=1;

  ngOnInit(): void {
    this.loadCarts();


  }
  loadCarts(){
    this.cart_service.loadCart().subscribe((data)=>{
      this.CartList = data as Cart[];
      console.log(this.CartList);
    })
  };
  deleteUser(id){
    this.cart_service.deleteCart(id).subscribe((res:any)=>{
      alert("Hủy đơn hàng thành công");
      this.loadCarts();
    },
    err=>{
      alert("lỗi!");
    });
  };
}
