import { TestBed, inject } from '@angular/core/testing';

import { LigneService } from './ligne.service';

describe('LigneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LigneService]
    });
  });

  it('should be created', inject([LigneService], (service: LigneService) => {
    expect(service).toBeTruthy();
  }));
});
