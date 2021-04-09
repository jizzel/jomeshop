import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TableComponent } from './components/table/table.component';
import { CorouselComponent } from './components/corousel/corousel.component';
import {HttpClientModule} from '@angular/common/http';


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
  providers: []
})
export class SharedModule { }
