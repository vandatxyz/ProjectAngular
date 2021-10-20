import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';
import {Product} from '../../model/product'

@Component({
  selector: 'app-about-pc',
  templateUrl: './about-pc.component.html',
  styleUrls: ['./about-pc.component.scss']
})
export class AboutPcComponent implements OnInit {

  constructor(public cart_service:CartService) { }
  @Input() product : Product;
  ngOnInit(): void {
    // this.resetForm();
  }
  formData={
        id:0,
        name:'',
        image:'',
        decription:'',
        quantity:0,
        price :0,
        originalPrice:0,
        detail :'',
        dateCreated :'',
        viewCount :0
      }
  // resetForm(form?:NgForm){
  //   if(form!=null)
  //   form.resetForm();
  //   this.cart_service.formData={
  //     id:0,
  //     name:'',
  //     image:'',
  //     decription:'',
  //     quantity:0,
  //     price :0,
  //     originalPrice:0,
  //     detail :'',
  //     dateCreated :'',
  //     viewCount :0
  //   }
  // }
  // Insertcart(){
  //   this.cart_service.insertCart().subscribe((res:any)=>{
  //     alert("them ok! ko loi");
  //   },
  //   err=>{
  //     alert("them that bai");
  //   }
  //   );
  // };

  // OnSubmit(form:NgForm)
  // {
  //     // this.Insertcart();
  //     this.resetForm();
  // }

  toForm(cart:Cart){
    this.cart_service.formData = Object.assign({},cart);
  };
}
