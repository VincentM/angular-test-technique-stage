import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererMesStationsComponent } from './gerer-mes-stations.component';

describe('GererMesStationsComponent', () => {
  let component: GererMesStationsComponent;
  let fixture: ComponentFixture<GererMesStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererMesStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererMesStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
