import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }
  LoginId :string | undefined;
  UserName:string | undefined;
  Phone:number | undefined;
  Address:string | undefined;
  Password:string | undefined;
  UserList:any;

  ngOnInit() {
  }

  signUp(){
    this.UserList ={
      LoginId:this.LoginId,
      UserName: this.UserName,
      Phone: this.Phone,
      Address: this.Address,
      Password: this.Password
    }
    this.service.addUser(this.UserList).subscribe(res=>
      alert(res.toString())
    );
    this.router.navigateByUrl('/login');
  }

}
