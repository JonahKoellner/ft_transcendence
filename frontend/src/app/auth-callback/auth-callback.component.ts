import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.sass'
})
export class AuthCallbackComponent {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.handleAuthCallback();
  }
}