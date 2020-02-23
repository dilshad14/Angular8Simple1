import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Inject, Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataSharingService } from "../util/data-sharing.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  _postsArray: Array<any> = [];

  constructor(private beService: BackendService, private dataSharingService: DataSharingService) { }
  persondata = [];
  data: any;
  ngOnInit() {
    this.beService.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k => data[k]);

    });
    this.getMapData();

    this.setNavDisplayFlag('false');
  }

  setNavDisplayFlag(flag){
    this.dataSharingService.changeMessage(flag);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit()");

    // change the value of AppComponent variable

  }

  getMapData() {
    this.beService.getMapData().subscribe((data: any) => {
      console.log(data);
      Object.keys(data.map).forEach(role => {
        var obj1 = data.map[role];
        obj1.forEach(user => {
          this._postsArray.push({ k: role, l: user });
        })
      });
    });

  }
}
