import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { config } from 'rxjs';


@NgModule({
  imports: [OAuthModule.forRoot(
    {
      resourceServer: {
        allowedUrls: ['http://localhost:1500'],
        sendAccessToken: true
      }
    }

  )],
  exports: [OAuthModule]
})
export class AppOAuthModule { }