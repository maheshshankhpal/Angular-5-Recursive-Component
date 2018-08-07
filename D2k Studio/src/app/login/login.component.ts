import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   message: string;
   loginForm;
   loading = false;
  constructor(
    private _authService: AuthService,
    private fb: FormBuilder,
    private _router: Router
  ) {
    this.createForm();
  }

  /**
   * this is used to set our message incase there's one to our user before clearing our
   * local storage using our auth service
   */
  ngOnInit() {
    this.message = this._authService.message;
    // this._authService.clear();
    if (this._authService.isAuthenticated()) {
      // let's check if the token will expire soon
      if (!this._authService.shouldIGetToken()) {
        const to: string = this._authService.getRedirectUrl() || '/dashboard';
        this._router.navigate([to]);
      }
    }
  }
  /**
   * we create our simple reactive form here
   */
  createForm(): void {
    this.loginForm = this.fb.group({
      Username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  /**
   * this is called when the user click on the submit button
   * and it also checks for the validity of the form , if invalid return don't do anything
   * and after authentication is successful we move to the redirectUrl if it was existing else
   * to dashboard
   */
   submitted() {
    if (this.loginForm.invalid) {
      return;
    }

    // set our login loading indicator to show we have started the server communication
    this.loading = true;
    this._authService
      .authenticate(this.loginForm.value.Username, this.loginForm.value.password)
      .subscribe((data) => {
        this.loading = false; // hide our loading indicator
        // navigate back to our redirect url if empty goto our dashboard
        const authData = JSON.parse(data);
        if (authData.results.status !== -1) {
          const to: string = this._authService.getRedirectUrl() || '/dashboard';
          this._router.navigate([to]);
        } else {
          this.message = authData.results.msg;
        }

      },
        error => {
          this.loading = false;
          this.message = error;
          //  alert(error);
          console.error('auth error', error);
        }
      );
  }
}
