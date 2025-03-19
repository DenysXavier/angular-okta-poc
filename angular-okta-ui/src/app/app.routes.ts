import { Routes } from '@angular/router';
import { UnprotectedComponent } from './unprotected/unprotected.component';
import { ProfileComponent } from './profile/profile.component';
import { OktaCallbackComponent } from '@okta/okta-angular';

export const routes: Routes = [
    { path: '', component: UnprotectedComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login/callback', component: OktaCallbackComponent }
];
