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

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    ChangeTextDirective,
    SqrtPipe,
    HomeComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
