import { Component, inject, OnInit } from '@angular/core';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';

@Component({
  selector: 'app-unprotected',
  imports: [],
  templateUrl: './unprotected.component.html',
  styleUrl: './unprotected.component.css'
})
export class UnprotectedComponent implements OnInit {
  UserCurrentStateDescription = 'UNAUTHENTICATED';
  isAuthenticated = false;

  private oktaStateService = inject(OktaAuthStateService);
  private oktaAuth = inject(OKTA_AUTH);

  ngOnInit(): void {
    this.oktaStateService.authState$.subscribe(
      oktaAuthState => {
        if (oktaAuthState.isAuthenticated) {
          this.isAuthenticated = true;
          this.UserCurrentStateDescription = 'AUTHENTICATED';
        }
      }
    );
  }

  public getAlertType(): string {
    if (this.isAuthenticated) {
      return 'alert-success'
    }

    return 'alert-danger';
  }

  public async signIn(): Promise<void> {
    await this.oktaAuth.signInWithRedirect();
  }

  public async signOut(): Promise<void> {
    await this.oktaAuth.signOut();
  }
}
