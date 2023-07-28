import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStatusComponent } from './password-status.component';

describe('PasswordStatusComponent', () => {
  let component: PasswordStatusComponent;
  let fixture: ComponentFixture<PasswordStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordStatusComponent]
    });
    fixture = TestBed.createComponent(PasswordStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
