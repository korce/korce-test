import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteakyComponent } from './steaky.component';

describe('SteakyComponent', () => {
  let component: SteakyComponent;
  let fixture: ComponentFixture<SteakyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteakyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteakyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
