import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { HttpClientModule } from "@angular/common/http";
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddReactiveFormsComponent } from './product/product-add-reactive-forms/product-add-reactive-forms.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';
import { CartComponent } from './cart/cart.component';
import { AddtocartService } from './services/addtocart.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddReactiveFormsComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //global module eklenecek ise providers içerisine tanımlanır.
  //provider içerisine tanımlanırsa service içinde root kısmına gerek kalmaz.
  
  providers: [AlertifyService, AccountService, AddtocartService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
