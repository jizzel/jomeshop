import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TableComponent } from './components/table/table.component';
import { CorouselComponent } from './components/corousel/corousel.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './services/data.service';
import {OrderService} from './services/order.service';
import {ProductService} from './services/product.service';
import {ShoppingCartService} from './services/shopping-cart.service';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {CarouselService} from './services/carousel.service';
import {CategoryService} from './services/category.service';



@NgModule({
  declarations: [ProductCardComponent, LoaderComponent, DatePickerComponent, TableComponent, CorouselComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
    ProductCardComponent,
    LoaderComponent,
    DatePickerComponent,
    TableComponent,
    CorouselComponent,
  ],
  providers: [
    AuthService,
    CarouselService,
    CategoryService,
    OrderService,
    ProductService,
    ShoppingCartService,
    UserService
  ]
})
export class SharedModule { }
