import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inter2JeeMaComponent } from './inter2-jee-ma.component';

describe('Inter2JeeMaComponent', () => {
  let component: Inter2JeeMaComponent;
  let fixture: ComponentFixture<Inter2JeeMaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Inter2JeeMaComponent]
    });
    fixture = TestBed.createComponent(Inter2JeeMaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
