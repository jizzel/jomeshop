import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import {RouterModule, Routes} from '@angular/router';

const adminRoutes: Routes = [
  {path: '', component: AdminProductsComponent},
  {path: 'orders', component: AdminOrdersComponent}
];

@NgModule({
  declarations: [AdminOrdersComponent, AdminProductsComponent, ProductFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminModule { }
