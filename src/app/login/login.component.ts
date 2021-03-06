import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private oauthService: OAuthService) {

    this.configure(oauthService);

  }

  private configure(oauthService: OAuthService) {
    const config = new AuthConfig();
    config.issuer = 'https://dev-587447.okta.com/oauth2/default';
    config.userinfoEndpoint = 'https://dev-587447.okta.com/oauth2/default/v1/userinfo';
    config.clientId = '0oa2bqdaipisQbjdD4x6';
    config.redirectUri = window.location.origin + '/index.html';
    config.scope = 'openid profile email';
    //config.jwks = new JwksValidationHandler();
    config.showDebugInformation = true;
    config.tokenEndpoint = 'https://dev-587447.okta.com/oauth2/default/v1/token';
    //config.requestAccessToken =true;
    //config.tokenValidationHandler = new JwksValidationHandler();


    this.oauthService.configure(config);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocumentAndLogin();


  }
  public getname() {
    let claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims.given_name;
  }

  ngOnInit() {

    this.oauthService.initLoginFlow();
    //console.log("name() + " + this.getname());
  }

  ngAfterViewInit() {

    let access_token = this.oauthService.getAccessToken();
    console.log("access token = " + this.oauthService.getAccessToken());
    alert('Login Comp:' +"access token = " + this.oauthService.getIdToken());
  }
}
