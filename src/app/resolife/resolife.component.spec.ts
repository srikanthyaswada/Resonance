import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolifeComponent } from './resolife.component';

describe('ResolifeComponent', () => {
  let component: ResolifeComponent;
  let fixture: ComponentFixture<ResolifeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolifeComponent]
    });
    fixture = TestBed.createComponent(ResolifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
