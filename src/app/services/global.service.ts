import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private url: String = '';

  constructor(
    private http: HttpClient
    ) {
    this.url = GLOBAL.url;
  }

  getHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  get(url_api) : Observable<any>{
    return this.http.get(this.url + url_api,this.getHeader());
  }

  post(url_api, data) : Observable<any>{
    return this.http.post(this.url + url_api, data,this.getHeader());
  }

  put(url_api, data) : Observable<any>{
    return this.http.put(this.url + url_api, data,this.getHeader());
  }

}