import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(public authService: AuthService, public router: Router) {
  }

  logout() {
    this.authService.logout();
    const redirectUrl = '';

    this.router.navigate([redirectUrl]);
  }
}
