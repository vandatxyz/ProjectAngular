import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ProductList : Product[]=[];
  user: 'vandat';
  name: string;
  decription:any;
  p:number=1;
  constructor(public product_service : ProductService,public cart_service:CartService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm();
    this.loadProduct();
    console.log(this.router.snapshot.params['id']);
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.product_service.formData={
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
    };
  };

  loadProduct(){
    this.product_service.loadProduct().subscribe((data)=>{
      this.ProductList = data as Product[];
      console.log(this.ProductList);
    })
  }

  // OnSubmit(form:NgForm){
  //   if(this.product_service.formData.id!=0){
  //     //---insert--//
  //     // this.InsertCart();
  //   }
  //   this.resetForm();
  // }

  // // InsertCart(){
  // //   this.cart_service.insertCart().subscribe((res:any)=>{
  // //     alert("them ok! ko loi");
  // //   },
  // //   err=>{
  // //     alert("them that bai");
  // //     }
  // //   );
  // // };

  toForm(pr:Product){
    this.product_service.formData = Object.assign({},pr);
  };

  UpdateProduct(){
    this.product_service.updateProduct().subscribe((res:any)=>{
      alert("cap nhat thanh cong");
      this.loadProduct();
    },
    err=>{
      alert("error!");
    });
  };

  deleteUser(id){
    this.product_service.deleteProduct(id).subscribe((res:any)=>{
      alert("xóa ok");
      this.loadProduct();
    },
    err=>{
      alert("error!");
    });
  };

  public cart = {
    count: 0
 }

  AddProductToCart(productInfo:Product){
    if(productInfo.quantity > 0){
      console.log(productInfo.id + ": " + productInfo.name);
      productInfo.quantity = productInfo.quantity - 1;
      this.cart.count = this.cart.count + 1;
    }
    else{
      alert("sản phẩm này đã hết hàng");
    }
  };

  Search(){
    if(this.name==""){
      this.loadProduct();
    }
    else{
      this.ProductList = this.ProductList.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
      };
    };

    key='id';
    reverse : boolean = false;
    Sort(key){
      this.key = key;
      this.reverse = !this.reverse;
      alert("sắp xếp theo :"+ key);
    }

    selectedProduct : Product;
    Onselected(product: Product):void{
      this.selectedProduct = product;
      // alert(`selectedProduct = ${JSON.stringify(this.selectedProduct)}`);
      // this.router.navigate(['home/Cproduct']);
    }
  }
