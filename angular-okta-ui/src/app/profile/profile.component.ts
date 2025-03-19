import { Component } from '@angular/core';
import { UserProfile } from '../shared/models/UserProfile.model';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  myProfile?: UserProfile;
}
