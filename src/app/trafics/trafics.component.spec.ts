import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraficsComponent } from './trafics.component';

describe('TraficsComponent', () => {
  let component: TraficsComponent;
  let fixture: ComponentFixture<TraficsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraficsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraficsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
