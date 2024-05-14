import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.sass'
})
export class UserprofileComponent {
  userProfile: any; // Adjust typing as necessary

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.userProfile = profile;
      console.log(this.userProfile);
    })
  }
}
