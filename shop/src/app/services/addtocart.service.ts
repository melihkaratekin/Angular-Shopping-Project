import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  constructor() { }

  subject = new Subject()

  sendProduct(product) {
    this.subject.next(product); //Trigger an event
  }
  
  getProduct() {
    return this.subject.asObservable();
  }

}
