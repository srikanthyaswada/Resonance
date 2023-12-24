import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inter2JeeMComponent } from './inter2-jee-m.component';

describe('Inter2JeeMComponent', () => {
  let component: Inter2JeeMComponent;
  let fixture: ComponentFixture<Inter2JeeMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Inter2JeeMComponent]
    });
    fixture = TestBed.createComponent(Inter2JeeMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
