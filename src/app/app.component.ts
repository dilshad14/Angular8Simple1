import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BackendService } from './backend.service';
import { DataSharingService } from "./util/data-sharing.service";
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // defaul show th nav panel
  displayNavPanel = "true";
  access_token = "";

  todaydate;

  public persondata = [];
  constructor(private beService: BackendService, private dataSharingService: DataSharingService, private oAuthService:OAuthService) {
    this.configure(oAuthService);
    setTimeout(() => {  console.log("World!"); }, 4000);

  }


  ngOnInit() {

    //this.oAuthService.initLoginFlow();
    alert('AppComponent:' + this.oAuthService.getAccessToken());

    this.access_token = this.oAuthService.getAccessToken();


    this.todaydate = this.beService.showTodayDate();

    this.beService.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k => data[k]);
      console.log(this.persondata);
    });

    this.getNavDiplayFlag();
  }


  getNavDiplayFlag() {
    //this.dataSharingService.displayNavPanel.subscribe(message => this.displayNavPanel = message);
  }

  title = 'Angular 7';
  private _bodyText = 'Created by Dilshad..its a beginning!!!';
  public get bodyText() {
    return this._bodyText;
  }
  public set bodyText(value) {
    this._bodyText = value;
  }

  private getmyvar() {
    return this.title + " " + this._bodyText;

  }



  
  private configure(oAuthService: OAuthService) {
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


    this.oAuthService.configure(config);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();

    // Load Discovery Document and then try to login the user
    this.oAuthService.loadDiscoveryDocumentAndLogin();


  }



}
