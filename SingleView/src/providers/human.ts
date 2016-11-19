import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs/observable';

@Injectable()
export class Human {

  constructor(public http: Http) {
    
  }

  loadStangers(){
   var resp=this.http.get("https://randomuser.me/api/?results=10").
   map(res=>res.json());
   return resp;
    
  }

}
