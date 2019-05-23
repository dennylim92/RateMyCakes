import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cakes';
  cakes: any = [];
  cake: any;
  newCake: any;
  singleCake: any;
  averageRating: any;
  isCakeSelected = false;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.newCake = { bakerName: '', imageURL: ''};
    this.getAllCakes();
  }



  showOneCake(event) {
    this.isCakeSelected = true;
    const obs = this._httpService.selectCake(event);
    obs.subscribe(data => {
      this.getAllCakes();
      console.log('hit show one cake');
      var sumOfRatings = 0;
      var average = 0;
      for (var stars in data["reviews"]) {
        if (data["reviews"].length > 0) {
          sumOfRatings += data["reviews"][stars].rating;
          average = sumOfRatings/data["reviews"].length;
        }
      }
      this.averageRating = average;
      this.singleCake = data;
      this.getAllCakes();
    });
  }

  getAllCakes() {
    const obs = this._httpService.getAllCakes();
    obs.subscribe(data => {
      this.cakes = data;
      for (const cakes in data) {
        this.cake = data[cakes];
      }
    });
  }

  addNewCake() {
    const obs = this._httpService.addCake(this.newCake);
    obs.subscribe(data => {
      this.newCake = { bakerName: '', imageURL: ''};
      this.getAllCakes();
    });
  }






}
