import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "../services/account.service";

// Guardlarla kullanıcının o anda login olup olmadığını anlarız
// Guardlar servisler gibi çalışır o yüzden Injectable decorator'ı yazılmalıdır.
@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
        private accountService:AccountService,
        private router: Router
    ) {}

    // Gitmek istediği yer login gerektiriyorsa (yani local storage'da kişi kayıtlıysa) onu yöneteceğiz
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
        let logged = this.accountService.isLoggedIn()
        if (logged) {
            return true;
        }
        else {
            this.router.navigate(["login"]);
            return false;
        }
    }

}