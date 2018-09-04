import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert } from '../../classes/alert';
import { AlertType } from '../../enums/alert-type.enum';
import { AlertService } from '../../services/alert.service';
import { Subscription } from '../../../../node_modules/rxjs';
import { AuthService } from '../../services/auth.service';
import { LoadingService } from '../../services/loading.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit , OnDestroy{
  
  public signupForm : FormGroup;
  private subscriptions : Subscription[] = [];
  
  constructor( private fb: FormBuilder, 
    private alertService : AlertService,
    private auth : AuthService,
    private loadingService : LoadingService,
    private router : Router,
    private route : ActivatedRoute ) {
    this.createForm();
   }

  ngOnInit() {
  }

  private createForm(){
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8)]] 
    })
  }

  public submit() : void {
    if(!this.signupForm.invalid){
      const { firstName, lastName , email, password } = this.signupForm.value;

      this.subscriptions.push(
        this.auth.signup(firstName, lastName, email, password).subscribe(success => {
          if(success){
            this.router.navigate(['/chat']);
          }
          this.loadingService.isLoading.next(false);
        })
      )
    }
    else{
      const failedSignedAlert = new Alert('Please enter a valid name, email and password, try again.', AlertType.Danger);
      this.alertService.alerts.next(failedSignedAlert);
    }
    
  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
