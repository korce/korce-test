import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpagetyComponent } from './spagety.component';

describe('SpagetyComponent', () => {
  let component: SpagetyComponent;
  let fixture: ComponentFixture<SpagetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpagetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpagetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
