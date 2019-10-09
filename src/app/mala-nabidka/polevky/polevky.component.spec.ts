import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolevkyComponent } from './polevky.component';

describe('PolevkyComponent', () => {
  let component: PolevkyComponent;
  let fixture: ComponentFixture<PolevkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolevkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolevkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
