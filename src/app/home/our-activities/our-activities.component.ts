import { Component, OnInit } from '@angular/core';
import * as flickity from 'flickity';
@Component({
  selector: 'app-our-activities',
  templateUrl: './our-activities.component.html',
  styleUrls: ['./our-activities.component.css']
})
export class OurActivitiesComponent implements OnInit {
  bSlider: any;

  slides= [
    {
      title: "الخدمات",
      body: `
    توفر منصة الخانة وصول سهل لجميع الفرص من التدريب و التوظيف
    وتقدم خدمات عديدة كانشاء سيرة ذاتية بصورة سهله وواضحة، و
    امكانية ارسال هذه السيرة الذاتيه للباحثين عن العمل بضغطة واحدة
    داخل المنصة ويكون التواصل اسهل ما بين المؤسسات،الشركات و
    الباحثين عن فرص العمل والتدريب اسهل اضافة الى ارسال اشعارات
    للمستخدمين بالفرص الجديدة ضمن مجال اهتماماتهم وبهذا فان منصتنا
     تشجع الشباب على تطوير ذاتهم لايجاد فرص عمل مناسبة وخلق مستقبل
    افضل لانفسهم وللمجتمع وكل هذه الخدمات تكون مجانية للافراد
    والمؤسسات ومقدمة من المنصة.`,
      img: '../../../assets/slides images/Pic-1.jpeg'
    },
    {
      title: "تدريبات بمجالات مختلفة للافراد والشركات",
      body: `
تقدم الخانة تدريبات بمجالات مختلفة للافراد والشركات، المؤسسات
حيث يمكن للشركات طلب تدريب لموظفيها وتتكفل الخانة بكافة الامور
المتعلقة بهذا الشان. تقدم الخانة خدمات التوظيف للشركات
والمؤسسات وتسهل عملية ايجاد الشخص المناسب لملئ المكان الشاغر
في تلك المؤسسة/الشركة.`,
      img: '../../../assets/slides images/Pic-4.jpeg'
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
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

    setTimeout(() => {
      this.bSlider.resize()
    }, 1000);
  }
  nextSlide() {
    this.bSlider.next()
  }
  prevSlide() {
    this.bSlider.previous()
  }

}
