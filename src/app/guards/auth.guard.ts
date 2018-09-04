import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { take, map, tap} from 'rxjs/operators'
import { AlertType } from '../enums/alert-type.enum';
import { Alert } from '../classes/alert';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService,
    private router : Router,
    private alertService : AlertService){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |  boolean {
        
      return true;
      this.auth.currentUser.pipe(
        take(1),
        map((currentUser) => !!currentUser),
        tap((loggedIn) => {
          if(!loggedIn){
            this.alertService.alerts.next(new Alert('You must be login to access the page.', AlertType.Danger));
            this.router.navigate(['/login'], { queryParams: { returnUrl : state.url } });
          }
        }      
      ))
  }
}
