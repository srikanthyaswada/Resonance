import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inter1JeeMaComponent } from './inter1-jee-ma.component';

describe('Inter1JeeMaComponent', () => {
  let component: Inter1JeeMaComponent;
  let fixture: ComponentFixture<Inter1JeeMaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Inter1JeeMaComponent]
    });
    fixture = TestBed.createComponent(Inter1JeeMaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
