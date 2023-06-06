import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string = '';

  constructor(public authService: AuthService, public router: Router) {
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/learning';

        this.router.navigate([redirectUrl]);
      }
    });
  }
}
