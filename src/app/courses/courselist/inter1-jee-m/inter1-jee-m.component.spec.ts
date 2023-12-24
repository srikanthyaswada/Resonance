import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inter1JeeMComponent } from './inter1-jee-m.component';

describe('Inter1JeeMComponent', () => {
  let component: Inter1JeeMComponent;
  let fixture: ComponentFixture<Inter1JeeMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Inter1JeeMComponent]
    });
    fixture = TestBed.createComponent(Inter1JeeMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
