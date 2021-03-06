import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.css']
})
export class CorouselComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {fullWidth: true,
      indicators: true, duration: 200});
    setInterval(() => {
      M.Carousel.getInstance(elems[0]).next();
    }, 5000);
  }

}
