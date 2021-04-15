import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpperSliderComponent } from './home/upper-slider/upper-slider.component';
import { BottomSliderComponent } from './home/bottom-slider/bottom-slider.component';
import { OurActivitiesComponent } from './home/our-activities/our-activities.component';
import { WhoAreWeComponent } from './home/who-are-we/who-are-we.component';
import { PhoneAppComponent } from './home/phone-app/phone-app.component';
import { JoinUsComponent } from './home/join-us/join-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpperSliderComponent,
    BottomSliderComponent,
    OurActivitiesComponent,
    WhoAreWeComponent,
    PhoneAppComponent,
    JoinUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
