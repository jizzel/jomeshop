import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../shared/services/product.service';
import {Product} from '../../../shared/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  ourProduct: Product = {
    Price: 0,
    categoryId: 'fruitID',
    imageUrl: '',
    name: 'Mango'
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.create(this.ourProduct)
      .subscribe(data => console.log(data));
  }

}
