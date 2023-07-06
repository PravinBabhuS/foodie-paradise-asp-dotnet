import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgGuard } from './Auth/authg.guard';
import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';

import { FoodMenuComponent } from './food-menu/food-menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes =
[
  {path:'login',component:LoginComponent},

  {path:'signup',component:SignupComponent},

  {path:'FoodMenu',component:FoodMenuComponent},

  {path:'Cart',component:CartComponent},

  {path:'bill',component:BillComponent},


  { path:'**', pathMatch:'full',redirectTo:'/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
