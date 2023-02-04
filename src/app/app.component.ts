import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'E-Store';
  loggedInUser: boolean;

  constructor(private readonly commonService: CommonService) {
      
    this.commonService.loggedInUser.subscribe((loggedInUser) => {
      this.loggedInUser = loggedInUser;
    });

  }

  ngOnInit(): void {
    this.commonService.isLoggedIn() ? this.commonService.loggedInUser.next(true) :  
    this.commonService.loggedInUser.next(false);
  }

}
