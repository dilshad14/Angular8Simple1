import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  _postsArray: Array<any> = [];

  constructor(private beService: BackendService) { }
  persondata = [];
  data: any;
  ngOnInit() {
    this.beService.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k => data[k]);

    });
    this.getMapData();

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
