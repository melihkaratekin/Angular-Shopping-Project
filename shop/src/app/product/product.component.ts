import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { AddtocartService } from '../services/addtocart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
  //Bu servisi sadece burada kullanacağımızı belirtiyoruz.
  //Eğer global servis olmasını isteseydik app.module.ts'ye yazacağız.
})
export class ProductComponent implements OnInit {
//eğer değişkenler kullanılacak ise constructor içerisine tanımlanarak erişilebilir.
  constructor(
    private alertifyService:AlertifyService,
    private productService:ProductService,
    private addtocartService:AddtocartService,
    private activatedRoute:ActivatedRoute
  ) { }
  
  title = "Product List";
  filterText = "";
  products:Product [];

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      params => {
        this.productService.getProducts(params["categoryId"])
        .subscribe(data => {
            this.products = data;
        }
        );
      }
    )

  }

  addToCart(product){

    this.addtocartService.sendProduct(product);
    this.alertifyService.success(product.name + " Added.");

  }
}
