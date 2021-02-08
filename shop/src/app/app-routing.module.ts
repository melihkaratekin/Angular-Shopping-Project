import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddReactiveFormsComponent } from './product/product-add-reactive-forms/product-add-reactive-forms.component';
import { ProductComponent } from './product/product.component';

// Sayfa linkinin sonuna bir şey yazılırsa yönlendirme yapmak için.
const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products/category/:categoryId', component: ProductComponent},
  {path: "product-add-1", component: ProductAddForms1Component, canActivate:[LoginGuard]},
  {path: "product-add-2", component: ProductAddReactiveFormsComponent, canActivate:[LoginGuard]},
  {path: "cart", redirectTo: 'products', pathMatch: 'full'},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
