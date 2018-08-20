import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg;
  constructor(public userSer: UserServiceService, public router: Router) { }

  ngOnInit() {
  }
  loginData(f:NgForm){
    console.log("f",f.value);
    this.userSer.LoginUser(f.value).subscribe((data:any)=>{
      // console.log(data.length);
      if(data.length == 0){
        this.msg =" Invalid User";
      }else{
        console.log("login",data);
        localStorage.setItem('token', data.token);
        this.msg = " Login successfull";
        this.router.navigate(['/home']);
        // this.userSer.show;
      }
    }, (error)=>{
      console.log(error);
    })
  }
}
