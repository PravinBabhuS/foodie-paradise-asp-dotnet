import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedService } from './shared.service';
import { SignupComponent } from './signup/signup.component';

import { FoodMenuComponent } from './food-menu/food-menu.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { BillComponent } from './bill/bill.component';
import { authInterceptorProviders } from './Auth/auth-interceptor.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FoodMenuComponent,
    NavbarComponent,
    CartComponent,
    BillComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [SharedService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
