import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllCakes() {
    return this._http.get('/cakes');
  }

  addCake(newCake) {
    return this._http.post('/cake/create', newCake);
  }

  updateCake(id, cakeReview) {
    console.log('hit service', id, cakeReview);
    return this._http.put('/cake/' + id, cakeReview);
  }

  selectCake(id) {
    return this._http.get('/cake/' + id);
  }
}
