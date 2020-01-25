import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   todaydate;
   public persondata = [];
  constructor(private beService: BackendService) {
  }
  ngOnInit() {
    this.todaydate = this.beService.showTodayDate();

    this.beService.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
   });


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
}
