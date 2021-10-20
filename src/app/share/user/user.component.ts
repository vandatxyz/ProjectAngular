import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  UserList : {};

  constructor(public user_service:UserService) { }

  ngOnInit(): void {
    this.resetForm();
    this.loadUser();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.user_service.formData={
      id : 0,
      name :'',
      password: ''
    }
  }
  loadUser(){
    this.user_service.loadUser().subscribe((data)=>{
      this.UserList = data as User[];
      console.log(this.UserList);
    })
  }
  OnSubmit(form:NgForm){
    if(this.user_service.formData.id==0){
      //---insert--//
      this.InsertUser();
    }else{
      //---update--//
      this.UpdateUser();
    }
    this.resetForm();
  }

  InsertUser(){
    this.user_service.insertUser().subscribe((res:any)=>{
      this.loadUser();
      alert("them ok! ko loi");
    },
    err=>{
      alert("them that bai");

    }
    );
  };

  toForm(user:User){
    this.user_service.formData = Object.assign({},user);
  };

  UpdateUser(){
    this.user_service.updateUser().subscribe((res:any)=>{
      alert("cap nhat thanh cong");
      this.loadUser();
    },
    err=>{
      alert("error!");
    });
  };

  deleteUser(id){
    this.user_service.deleteUser(id).subscribe((res:any)=>{
      alert("xóa ok");
      this.loadUser();
    },
    err=>{
      alert("error!");
    });
  };
}
