import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() showCakes: any;
  @Output() gotCakeEmitter = new EventEmitter();
  @Output() refreshPage = new EventEmitter();
  singleCake: any;
  cakeReview: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.cakeReview = { rating: '0', comment: ''};
  }

  oneCake(id) {
    this.gotCakeEmitter.emit(id);
  }

  submitReview(id) {
    this.refreshPage.emit(id);
    const obs = this._httpService.updateCake(id, this.cakeReview);
    obs.subscribe(data => {
      this.cakeReview = { rating: '0', comment: ''};
    });
  }

}
