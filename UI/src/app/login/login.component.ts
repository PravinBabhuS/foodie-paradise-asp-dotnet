import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../Auth/token-storage.service';
import { SharedService } from '../shared.service';
import * as alertyfy from 'alertifyjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SharedService, private router:Router, private token:TokenStorageService) { }

  LoginId:any;
  Password:any;
  LArray:any;
  ngOnInit(): void {
    const token = this.token.getToken();
    if(token != null)
    { this.router.navigateByUrl('dashboard') }
  }

  cLog(){
    this.LArray={
      LoginId: this.LoginId,
      Password: this.Password
    }
    this.service.login(this.LArray).subscribe(
      (res:any)=>{
        this.token.saveToken(res.token)
        this.token.saveUser(res)
        alertyfy.success("Login Successful")
        this.router.navigateByUrl('/FoodMenu');
      },
      err => {
        if(err.status == 401)
          alertyfy.error("User ID or Password is incorrect.");
        else
          console.log(err);
      }
    );
  }

}
