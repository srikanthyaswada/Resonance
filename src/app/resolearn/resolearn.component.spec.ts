import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolearnComponent } from './resolearn.component';

describe('ResolearnComponent', () => {
  let component: ResolearnComponent;
  let fixture: ComponentFixture<ResolearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolearnComponent]
    });
    fixture = TestBed.createComponent(ResolearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
