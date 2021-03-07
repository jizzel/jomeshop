import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';
import {globals} from '../../app.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService{

  constructor(http: HttpClient) {
    super(http, '/products');
  }
}
