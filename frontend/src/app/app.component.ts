import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'frontend';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login();
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
