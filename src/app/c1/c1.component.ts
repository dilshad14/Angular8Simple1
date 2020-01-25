import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-c1',
   templateUrl: './c1.component.html',
   styleUrls: ['./c1.component.css']
})
export class C1Component implements
   OnInit {


   newComp = "Entered in newly created component";
   // declared array of months. 
   months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];
   selectedMonth = "";
   isavailable = false; // variable is set to true
   price = 10.00;
   inflationPct = 2/100;
   todaydate = new Date();
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}; 

selectChangeHandler(event : any){
   this.selectedMonth = event.target.value;
}

   constructor() { }
   ngOnInit() {
      console.log('Trace onInit');
   }



}
