import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }

  isLogOut() {
    this.accountService.logOut();
  }

}
