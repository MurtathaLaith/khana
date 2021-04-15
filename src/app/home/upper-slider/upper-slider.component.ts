import { Component, OnInit } from '@angular/core';
import * as flickity from 'flickity-fade';

@Component({
  selector: 'app-upper-slider',
  templateUrl: './upper-slider.component.html',
  styleUrls: ['./upper-slider.component.css']
})
export class UpperSliderComponent implements OnInit {

slideInfo=[
  {title:'lorem, ipsum',
  body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi aliquam, similique explicabo eius consequatur. Hic saepe dolor temporibus animi? Possimus, debitis! `,
  imgSrc:'../../../assets/imgs/priscilla-du-preez-XkKCui44iM0-unsplash.png',
  isSelected:true},
  
  {title:'lorem, ipsum2',
  body:`Lorem ipsum dolor slklklklklklkit amet consectetur adipisicing elit. Odit commodi aliquam, similique explicabo eius consequatur. Hic saepe dolor temporibus animi? Possimus, debitis! `,
  imgSrc:'../../../assets/imgs/priscilla-du-preez-XkKCui44iM0-unsplash.png',
  isSelected:false},
]


  constructor() { }
  ngOnInit():void{}
  slider:any;
  ngAfterViewInit(): void {
    var elem = document.querySelector('.upper-slider');
    let options = {
      fade: true,
      wrapAround: true,
      adaptiveHeight: true,
      cellSelector: '.upper-slider-cell',
      prevNextButtons: false,
      pageDots: false,
      cellAlign: 'left',

    }
    this.slider = new flickity(elem, options)

    setTimeout(() => {  
      this.slider.resize()
    }, 100);
  }


}
