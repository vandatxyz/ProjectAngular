import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,public user_service:UserService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  InsertUser(){
    this.user_service.insertUser().subscribe((res:any)=>{
      alert("them ok! ko loi");
    },
    err=>{
      alert("them that bai");
    }
    );
  };
  login(): void{
      this.router.navigate(['']);
    };
    resetForm(form?:NgForm){
      if(form!=null)
      form.resetForm();
      this.user_service.formData={
        id : 0,
        name :'',
        password: ''
      }
    }

    OnSubmit(form:NgForm){
      if(this.user_service.formData.id==0)
      {
        this.InsertUser();
      }
      this.resetForm();
    }
}
