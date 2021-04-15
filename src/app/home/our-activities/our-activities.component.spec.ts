import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurActivitiesComponent } from './our-activities.component';

describe('OurActivitiesComponent', () => {
  let component: OurActivitiesComponent;
  let fixture: ComponentFixture<OurActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
