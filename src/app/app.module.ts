import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './pipes/sqrtpipe';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BackendService } from './backend.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewChild, AfterViewInit } from '@angular/core';
import { WindowComponent } from './window/window.component';
import { PortalModule } from '@angular/cdk/portal';
//import { OAuthService, JwksValidationHandler,UrlHelperService, OAuthLogger} from 'angular-oauth2-oidc';
import { OAuthModule } from 'angular-oauth2-oidc';
import { CustomLogger } from './util/CustomLogger';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    ChangeTextDirective,
    SqrtPipe,
    HomeComponent,
    ContactComponent,
    WindowComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PortalModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://jsonplaceholder.typicode.com/**'],
          sendAccessToken: true
      }
  })
  ],
  providers: [BackendService],

  bootstrap: [AppComponent]
})
export class AppModule { }
