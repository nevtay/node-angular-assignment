import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login.TsComponent } from './login.ts.component';

describe('Login.TsComponent', () => {
  let component: Login.TsComponent;
  let fixture: ComponentFixture<Login.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
