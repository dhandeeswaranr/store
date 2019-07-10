import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { map, filter, switchMap, catchError } from 'rxjs/operators';
//import {   map } from 'rxjs/add/operator/map'
@Injectable()
export class LandingPageService {

  constructor(private http:HttpClient) { }
landingPageService():Observable<any>{
console.log("server hit");
return this.http.get('http://localhost:3000/api/taxes')
  }
}

