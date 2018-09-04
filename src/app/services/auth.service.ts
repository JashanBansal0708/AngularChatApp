import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { Router } from '../../../node_modules/@angular/router';
import { AlertService } from './alert.service';
import { Alert } from '../classes/alert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public currentUser : Observable<User | null>;

  constructor(private router : Router,private alertService : AlertService) {
    //TODO fetch the user from the firebase backend , the set te user
    this.currentUser  = new Observable<null>();
  }

  public signup(firstName: string, lastName: string, email: string, password: string) : Observable<true>{
    //TODO call the firebase login function
    return new Observable<true>();
  }

  public login(email: string, password: string) : Observable<true>{
    //TODO call the firebase login function
    return new Observable<true>();
  }

  public logout() : void{
    //TODO call the firebase login function
    this.router.navigate(['/login']);
    this.alertService.alerts.next(new Alert('You have been signed out.'));
  }
}
