import {inject, Injectable, InjectionToken, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {globals} from '../../app.module';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private url: string) {
    // this.url = globals.baseUrl + this.url;
  }

  getAll() {
    return this.http.get(this.url);
  }

  get(id: string) {
    return this.http.get(this.url + '/:' + id);
  }

  create(resource: Product) {
    return this.http.post(this.url, JSON.stringify(resource));
  }

  update(resource: Product){
    return this.http.put(this.url, JSON.stringify(resource));
  }

  delete(id: string){
    return this.http.delete(this.url + '/:' + id);
  }


}
