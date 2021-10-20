import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, public userService:UserService) { }
  user:string;
  pass:string;
  ngOnInit(): void {
  }
  login(): void{
    if(this.user=='vandat' && this.pass=='vandat'){
      this.router.navigate(['home/product']);
      alert("Bạn đã đăng nhập với danh nghĩa người dùng name: "+this.user);
    };
    if(this.user=='admin' && this.pass=='admin'){
      this.router.navigate(['manage/mnProduct']);
      alert("Bạn đã đăng nhập với danh nghĩa quản trị name: "+this.user);
    }
  }
}
