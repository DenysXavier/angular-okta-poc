import { Component, inject, OnInit } from '@angular/core';
import { UserProfile } from '../shared/models/UserProfile.model';
import { OktaAuthStateService } from '@okta/okta-angular';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  myProfile?: UserProfile;

  private oktaStateService = inject(OktaAuthStateService);

  ngOnInit(): void {
    this.oktaStateService.authState$.subscribe(oktaAuthState => {
      if (oktaAuthState.isAuthenticated) {
        const claims = oktaAuthState.idToken?.claims;

        this.myProfile = {
          name: claims?.name,
          email: claims?.preferred_username
        }
      }
    })
  }
}
