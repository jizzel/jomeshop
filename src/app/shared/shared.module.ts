import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TableComponent } from './components/table/table.component';
import { CorouselComponent } from './components/corousel/corousel.component';



@NgModule({
  declarations: [ProductCardComponent, LoaderComponent, DatePickerComponent, TableComponent, CorouselComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductCardComponent,
    LoaderComponent,
    DatePickerComponent,
    TableComponent,
    CorouselComponent,
  ]
})
export class SharedModule { }
