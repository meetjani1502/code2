import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistierComponent } from './registier.component';

describe('RegistierComponent', () => {
  let component: RegistierComponent;
  let fixture: ComponentFixture<RegistierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistierComponent]
    });
    fixture = TestBed.createComponent(RegistierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
