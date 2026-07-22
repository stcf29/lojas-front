import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageVivazComponent } from './landing-page-vivaz.component';

describe('LandingPageVivazComponent', () => {
  let component: LandingPageVivazComponent;
  let fixture: ComponentFixture<LandingPageVivazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageVivazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageVivazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
