import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Http, Headers, RequestOptions,  } from '@angular/http';
import { AbstractControl, ValidatorFn } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private header = new Headers({ 'Content-Type': 'application/json' });

  headers = new Headers({
    'Accept': 'application/x-www-form-urlencoded',
    "Content-Type" : "application/x-www-form-urlencoded",
  })

  private baseurl = environment.baseUrl;
  private options = new RequestOptions({ headers: this.header });

  public loggedInUser = new Subject<boolean>();

  constructor(public readonly http: Http) { }

   isLoggedIn() {
    const token = localStorage.getItem('token');
    if(token){
      return true;
    }
    return false;
  }

  getPhotos() {
    const url = this.baseurl + '/photos';
    return this.http.get(url, this.options)
    .pipe(map((resp: any) => {
      return resp.json();
    }));
  }

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  randomString(len) {
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
  }

  public addToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  public logout() {
    localStorage.clear();
    this.loggedInUser.next(false)
  }

}
