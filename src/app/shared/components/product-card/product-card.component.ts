import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const elem1 = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elem1);
  }

  removeFromCart() {

  }

  addToCart() {

  }
}
