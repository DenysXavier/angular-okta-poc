import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

import { routes } from './app.routes';

/**
 * Configuring Okta parameters using the application integration created on Okta 
 * (either via Dashboard or Okta CLI)
 * 
 * **Change oktaAuth boilerplate acordingly**
 * 
 * https://developer.okta.com/docs/guides/sign-into-spa-redirect/angular/main/#find-your-config-values
 */
const oktaAuth = new OktaAuth({
  issuer: 'https://{yourOktaDomain}',
  clientId: '{yourClientID}',
  redirectUri: window.location.origin + '/login/callback',
  // For a list of available scopes, see: https://developer.okta.com/docs/api/oauth2/
  scopes: [
    'openid',
    'profile',
    'offline_access'
  ]
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // import providers from Okta Auth Module using the config above
    importProvidersFrom(
      OktaAuthModule.forRoot({ oktaAuth })
    )
  ]
};
