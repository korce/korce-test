import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NealkoComponent } from './nealko.component';

describe('NealkoComponent', () => {
  let component: NealkoComponent;
  let fixture: ComponentFixture<NealkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NealkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NealkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
