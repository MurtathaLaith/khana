import { Component, OnInit } from '@angular/core';
import * as flickity from 'flickity';
@Component({
  selector: 'app-our-activities',
  templateUrl: './our-activities.component.html',
  styleUrls: ['./our-activities.component.css']
})
export class OurActivitiesComponent implements OnInit {
  bSlider: any;
  constructor() { }

  ngOnInit(): void {
    let elem = document.querySelector('.bottom-slider');
    let options = {
      fade: true,
      wrapAround: true,
      adaptiveHeight: true,
      cellSelector: '.bottom-slider-cell',
      prevNextButtons: false,
      pageDots: false,
      cellAlign: 'left',
    }

    this.bSlider = new flickity(elem, options)
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.bSlider.resize()
    }, 500);
  }
nextSlide(){
  this.bSlider.next()
}
prevSlide(){
  this.bSlider.previous()
}

}
