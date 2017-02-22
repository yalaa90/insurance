import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class InsuranceService {

  url = "http://localhost:8080/insurance";
  constructor(private http:Http) {// injecting http

  }

  saveInsurance(value) { // saving
    return this.http.post(this.url + "/save", value, null).map((res:Response) => {
      return res.json()['data']; // rx map
    });
  }

  getAllInsurance() { // get
    return this.http.get(this.url + "/all", null).map((res:Response) => {

      return res.json()['data'];// rx map 
    });
  }
}
