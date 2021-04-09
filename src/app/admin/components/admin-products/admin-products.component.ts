import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  ourProduct: Product = {
    price: 0,
    categoryId: 'fruitID',
    imageUrl: '',
    name: 'Mango'
  };
  ourCategory: Category = {
    name: 'fruit'
  }

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.productService.create(this.ourProduct)
      .subscribe((data: Product) => console.log(data));
    this.categoryService.create(this.ourCategory)
      .subscribe((data: Category) => {
        console.log(data);
      });
  }

}
