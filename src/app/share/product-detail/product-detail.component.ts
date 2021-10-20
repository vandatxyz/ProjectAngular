import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  ProductLists:any;
  rs:any;
  id:any;
  cartList:any;
  constructor(private router:ActivatedRoute, private product_service:ProductService,public cart_ser :CartService) { }



  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.loadOne();
  }
  loadOne(){
    this.product_service.getOneP(this.id).subscribe(data=>{
      this.ProductLists = data;
      this.cart_ser.formData = data as Cart;
      this.cartList={
        id:0,
        name:this.cart_ser.formData.name,
        image:this.cart_ser.formData.image,
        decription:this.cart_ser.formData.decription,
        quantity:this.cart_ser.formData.quantity,
        price :this.cart_ser.formData.price,
        originalPrice:this.cart_ser.formData.originalPrice,
        detail :this.cart_ser.formData.detail,
        dateCreated :this.cart_ser.formData.dateCreated,
        viewCount :this.cart_ser.formData.viewCount
      }
      console.log(this.ProductLists);
      console.log(this.cartList);
    })
  };
  insert(){
    this.cart_ser.insertCart(this.cartList).subscribe(data=>{
      alert("thêm sản phẩm thành công");
    },err=>{
      alert("Lỗi");
    })
  };
  DelProductToCart(productInfo:Cart){
    if(productInfo.quantity > 0){
      console.log(productInfo.id + ": " + productInfo.name);
      productInfo.quantity = productInfo.quantity - 1;
    }
    else{
      alert("sản phẩm này đã hết hàng");
    }
  };
  AddProductToCart(productInfo:Cart){
    if(productInfo.quantity >= 0){
      productInfo.quantity = productInfo.quantity + 1;
    }
    else{
      alert("sản phẩm này đã hết hàng");
    }
  };
}
