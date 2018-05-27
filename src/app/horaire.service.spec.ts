import { TestBed, inject } from '@angular/core/testing';

import { HoraireService } from './horaire.service';

describe('HoraireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoraireService]
    });
  });

  it('should be created', inject([HoraireService], (service: HoraireService) => {
    expect(service).toBeTruthy();
  }));
});
