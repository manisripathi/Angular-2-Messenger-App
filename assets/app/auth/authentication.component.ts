import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authentication.component.html'
})

export class AuthenticationComponent {
  constructor(private authService: AuthService){}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
