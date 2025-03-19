import { Routes } from '@angular/router';
import { UnprotectedComponent } from './unprotected/unprotected.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: UnprotectedComponent },
    { path: 'profile', component: ProfileComponent }
];
