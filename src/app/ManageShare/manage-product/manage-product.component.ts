import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {

  constructor(public product_service : ProductService) { }
  ProductList : Product[]=[];
  name : any;
  p: number = 1;

  ngOnInit(): void {
    this.resetForm();
    this.loadProduct();
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
    }
  }

  loadProduct(){
    this.product_service.loadProduct().subscribe((data)=>{
      this.ProductList = data as Product[];
    })
  }
  OnSubmit(form:NgForm){
    if(this.product_service.formData.id==0){
      //---insert--//
      this.InsertProduct();
    }else{
      //---update--//
      this.UpdateProduct();
    }
    this.resetForm();
  }

  InsertProduct(){
    this.product_service.insertProduct().subscribe((res:any)=>{
      this.loadProduct();
      alert("thêm sản phẩm thành công");
    },
    err=>{
      alert("them that bai");
    }
    );
  };

  toForm(product:Product){
    this.product_service.formData = Object.assign({},product);
  };

  UpdateProduct(){
    this.product_service.updateProduct().subscribe((res:any)=>{
      alert("đã cập nhật lại sản phẩm");
      this.loadProduct();
    },
    err=>{
      alert("error!");
    });
  };

  deleteUser(id){
    this.product_service.deleteProduct(id).subscribe((res:any)=>{
      alert("xóa thành công sản phâm");
      this.loadProduct();
    },
    err=>{
      alert("error!");
    });
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
  }
}
