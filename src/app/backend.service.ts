import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  private apiUrl1 = "http://localhost:9000/info";

  constructor(private http: HttpClient) { }
   
  getData() {
      return this.http.get(this.apiurl);
   }
  showTodayDate() { 
    let ndate = new Date(); 
    return ndate; 
 } 

 getMapData() {
  return this.http.get(this.apiUrl1);
}
}
