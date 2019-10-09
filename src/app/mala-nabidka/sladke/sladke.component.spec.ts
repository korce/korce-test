import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SladkeComponent } from './sladke.component';

describe('SladkeComponent', () => {
  let component: SladkeComponent;
  let fixture: ComponentFixture<SladkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SladkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SladkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
