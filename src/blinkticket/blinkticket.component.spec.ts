import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkticketComponent } from './blinkticket.component';

describe('BlinkticketComponent', () => {
  let component: BlinkticketComponent;
  let fixture: ComponentFixture<BlinkticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlinkticketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlinkticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
