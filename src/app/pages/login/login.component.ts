import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alert } from '../../classes/alert';
import { AlertType } from '../../enums/alert-type.enum';
import { AlertService } from '../../services/alert.service';
import { LoadingService } from '../../services/loading.service';
import { Subscription } from '../../../../node_modules/rxjs';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy{

  public loginForm : FormGroup;
  private subscriptions : Subscription[] = [];
  private  returnUrl : string;
  
  constructor( private fb: FormBuilder,
     private alertService : AlertService,
     private loadingService : LoadingService,
     private router : Router,
     private auth: AuthService,
     private route : ActivatedRoute){
    this.createForm();
   }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chat'
  }

  private createForm(){
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8)]] 
    })
  }

  public submit() : void {

    if(this.loginForm.valid){
      this.loadingService.isLoading.next(true);
      const { email, password } = this.loginForm.value;

      //TODO call the auth service
      this.subscriptions.push(
        this.auth.login(email, password).subscribe(success => {
          if(success){
            this.router.navigateByUrl(this.returnUrl);
          }
          // this.router.navigateByUrl(this.returnUrl);
          this.loadingService.isLoading.next(false);
        })
      )
    }
    else{
      const failedLoginAlert : Alert = new Alert("Your email or password were invalid, try again", AlertType.Danger);
      this.loadingService.isLoading.next(false);
      this.alertService.alerts.next( failedLoginAlert );
    }
  }
  
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe);
  }

}
