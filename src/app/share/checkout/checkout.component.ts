import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartLists:any;
  rs:any;
  id:any;

  constructor(private router:ActivatedRoute,public cart_service : CartService) { }
  CartList : Cart[]=[];
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
  }

  deleteUser(){
    this.cart_service.deleteCart(this.id).subscribe((res:any)=>{
      alert("đơn hàng được đặt thành công");
    },
    err=>{
      alert("lỗi!");
    });
  };

  loadOne(){
    this.cart_service.getOneP(this.id).subscribe(data=>{
      this.cartLists = data;
      this.cart_service.formData = data as Cart;
      console.log(this.cartLists);
    })
  };
}
