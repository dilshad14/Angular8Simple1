import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  //{ path: "index.html", component: AppComponent },
  { path: "login", component: LoginComponent ,   pathMatch: 'full'},
  { path: "home", component: HomeComponent ,  pathMatch: 'full'},
  { path: "contact", component: ContactComponent,   pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomeComponent, ContactComponent];
