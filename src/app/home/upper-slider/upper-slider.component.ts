import { Component, OnInit } from '@angular/core';
import * as flickity from 'flickity-fade';

@Component({
  selector: 'app-upper-slider',
  templateUrl: './upper-slider.component.html',
  styleUrls: ['./upper-slider.component.css']
})
export class UpperSliderComponent implements OnInit {

slideInfo=[
  {title:'الرؤية',
  body:`أن تكون الخانة الحل الأول والمساعد الأول في خلق جيل واعي باهمية التدريب والتطوير.`,
  imgSrc:'../../../assets/slides images/Pic-1.jpeg',
  isSelected:true},
  
  {title:'الهدف',
  body:`أن تكون الخانة الحل الأول والمساعد الأول في خلق جيل واعي باهمية التدريب والتطوير.`,
  imgSrc:'../../../assets/slides images/Pic-3.jpeg',
  isSelected:false},
  {title:'المهمة',
  body:`
  توفير خدمات متكاملة للافراد والشركات من شانها ان تطور القطاع الخاص وتعمل على توظيف طاقات الشباب في امكانها الصحيحة.`,
  imgSrc:'../../../assets/slides images/Pic-4.jpeg',
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
      autoPlay: 2000,

    }
    this.slider = new flickity(elem, options)

    setTimeout(() => {  
      this.slider.resize()
    }, 100);
  }


}
