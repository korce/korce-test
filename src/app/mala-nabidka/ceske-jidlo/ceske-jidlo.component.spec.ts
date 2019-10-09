import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeskeJidloComponent } from './ceske-jidlo.component';

describe('CeskeJidloComponent', () => {
  let component: CeskeJidloComponent;
  let fixture: ComponentFixture<CeskeJidloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeskeJidloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeskeJidloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
