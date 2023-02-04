import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  private tokenKey:string = 'token';

  constructor(
    private readonly formBuilder: FormBuilder, 
    private readonly commonService: CommonService,
    private readonly router: Router) { 
      if(this.commonService.isLoggedIn()){
        this.router.navigate(['/dashboard']); 
      }
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, this.commonService.patternValidator()])]
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onLogin() {

    this.submitted = true;
    if (this.loginForm.valid) {
      this.addNewToken();
      this.commonService.loggedInUser.next(true)
      this.router.navigate(['/dashboard']);     
    }

  }

  public addNewToken() {
    const token = this.commonService.randomString(32);
    this.commonService.addToLocalStorage(this.tokenKey, token);
  }

}
