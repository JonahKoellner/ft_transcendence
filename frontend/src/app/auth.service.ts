import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private clientId = 'u-s4t2ud-6d22cb23d6d258c99af31968ba99f3f6b5d5ca177d22405e7286601e8a5a41a8';
  private clientSecret = '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'; // Consider moving this to your backend for security
  private redirectUri = 'http://localhost:4200/auth/callback';

  window: any;

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const url = `https://api.intra.42.fr/oauth/authorize?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&response_type=code&scope=public`;
    window.location.href = url;
  }

  handleAuthCallback() {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      this.exchangeCodeForToken(code);
    }
  }

  private exchangeCodeForToken(code: string) {
    const url = 'https://api.intra.42.fr/oauth/token';
    const body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('client_id', this.clientId);
    body.set('client_secret', this.clientSecret); // Reminder: Move to backend for production
    body.set('code', code);
    body.set('redirect_uri', this.redirectUri);

    this.http.post(url, body.toString(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    }).subscribe(
      (response: any) => {
        console.log('Access Token:', response.access_token);
        this.saveToken(response.access_token);
        // Optionally redirect the user to a different page after successful login
        this.router.navigate(['/home']); // Change '/dashboard' to your app's landing page after login
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  private saveToken(token: string) {
    localStorage.setItem('access_token', token); // Or use sessionStorage if appropriate
  }

  getToken() {
    return localStorage.getItem('access_token'); // Or sessionStorage
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('access_token'); // Or sessionStorage
    // Handle additional logout logic as needed, such as redirecting the user
    this.router.navigate(['/login']); // Adjust as necessary for your app's structure
  }
  getProfile() {
    const token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get('https://api.intra.42.fr/v2/me', { headers });
  }
}