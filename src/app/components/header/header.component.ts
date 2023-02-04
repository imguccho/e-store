import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isLoggedIn: boolean;

  constructor(
    private readonly commonService: CommonService,
    private readonly router: Router) { 
  }
  
  ngOnInit(): void {
  }

  onLogout(){
    this.commonService.logout();
    this.router.navigate(['/login']);
  }

}
