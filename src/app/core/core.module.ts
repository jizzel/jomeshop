import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componets/login/login.component';
import {HomeComponent} from './componets/home/home.component';
import {NavbarComponent} from './componets/navbar/navbar.component';
import {PageNotFoundComponent} from './componets/page-not-found/page-not-found.component';
import { CarouselComponent } from './componets/carousel/carousel.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, LoginComponent, PageNotFoundComponent, CarouselComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeComponent, NavbarComponent, LoginComponent, PageNotFoundComponent, CarouselComponent]
})
export class CoreModule { }
