import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingSummaryComponent } from './components/shopping-summary/shopping-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';



@NgModule({
  declarations: [ProductsComponent, ShoppingCartComponent, ShoppingSummaryComponent, ShippingFormComponent, MyOrdersComponent, CheckOutComponent, OrderSuccessComponent],
  imports: [
    CommonModule
  ]
})
export class ShoppingModule { }
