import { OAuthLogger } from 'angular-oauth2-oidc';

export class CustomLogger extends OAuthLogger {
     debug(message?: any, ...optionalParams: any[]): void {
         console.debug("OAuthLog: " + message);
     }

     info(message?: any, ...optionalParams: any[]): void {
          console.debug("OAuthLog: " + message);
     }
     log(message?: any, ...optionalParams: any[]): void {
          console.debug("OAuthLog: " + message);
     }
     warn(message?: any, ...optionalParams: any[]): void {
          console.debug("OAuthLog: " + message);
     }
     error(message?: any, ...optionalParams: any[]): void {
          console.debug("OAuthLog: " + message);
     }
   
}