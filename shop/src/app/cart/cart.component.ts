import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { AddtocartService } from '../services/addtocart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private addtocartService:AddtocartService) { }

  cartItems = [];
  cart = [];
  cartTotal = 0;

  ngOnInit() {

    this.addtocartService.getProduct().subscribe(
      result => {
        this.cartItems.push(result);
        this.cartTotal = this.cartTotalPrice()
     })

  }

  cartTotalPrice() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal = this.cartTotal + item.price
    })
    return this.cartTotal
  }

}
