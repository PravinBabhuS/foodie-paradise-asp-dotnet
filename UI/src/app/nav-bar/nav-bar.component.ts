import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../Auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private token:TokenStorageService, private router:Router) { }

  CurrentUser = this.token.getUser();

  ngOnInit(): void {
  }

  onLogout(){
    this.token.signOut();
    this.router.navigate(['/login']);
  }

  navigFood(){
    this.router.navigate(['/FoodMenu']);
  }

  navigCart(){
    this.router.navigate(['/Cart']);
  }

  navigBill(){
    this.router.navigate(['/bill']);
  }

}
