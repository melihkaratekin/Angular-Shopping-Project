import { Injectable } from '@angular/core';

declare let alertify:any;
//servis olabilmesi için injectable olamsı gerekir.
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  success(message:string){
    alertify.success(message)
  }
  error(message:string){
    alertify.error(message)
  }
  warning(message:string){
    alertify.warning(message)
  }
}
