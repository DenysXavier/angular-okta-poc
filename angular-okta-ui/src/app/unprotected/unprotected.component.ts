import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unprotected',
  imports: [],
  templateUrl: './unprotected.component.html',
  styleUrl: './unprotected.component.css'
})
export class UnprotectedComponent {
  UserCurrentStateDescription = 'UNAUTHENTICATED';
  isAuthenticated = false;

  public getAlertType(): string {
    return "alert-danger";
  }

  public signIn(): void {
    throw new Error('Method not implemented.');
  }

  public signOut(): void {
    throw new Error('Method not implemented.');
  }
}
