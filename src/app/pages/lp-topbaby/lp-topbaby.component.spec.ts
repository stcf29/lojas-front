import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpTopbabyComponent } from './lp-topbaby.component';

describe('LpTopbabyComponent', () => {
  let component: LpTopbabyComponent;
  let fixture: ComponentFixture<LpTopbabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpTopbabyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpTopbabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
