import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroissantyComponent } from './croissanty.component';

describe('CroissantyComponent', () => {
  let component: CroissantyComponent;
  let fixture: ComponentFixture<CroissantyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroissantyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroissantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
