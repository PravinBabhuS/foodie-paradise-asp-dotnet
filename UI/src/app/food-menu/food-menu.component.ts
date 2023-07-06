import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../Auth/token-storage.service';
import { SharedService } from '../shared.service';
import * as alertyfy from 'alertifyjs';
@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {



  constructor(private service:SharedService, private token:TokenStorageService) { }

  FoodList:any=[];
  CurrentLoginId = this.token.getUser().Loginid;
  Food:any;

  ngOnInit(): void {
    this.refreshFoodList();
  }

  refreshFoodList(){
    this.service.getFoodDetail().subscribe((data: any)=>{
      this.FoodList=data;
    });
  }

  addToCart(item1:any){
    this.Food = item1;
    this.Food = {
      LoginId: this.CurrentLoginId,
      FoodCode: this.Food.FoodCode,
      FoodName: this.Food.FoodName,
      Price:this.Food.Price,
      Quantity: 1,
    };
    this.service.addCart(this.Food).subscribe(res=>{
      alertyfy.success("Added Successfully");
      });
  }

}
