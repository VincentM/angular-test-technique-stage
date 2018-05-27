import { TestBed, inject } from '@angular/core/testing';

import { TraficService } from './trafic.service';

describe('TraficService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraficService]
    });
  });

  it('should be created', inject([TraficService], (service: TraficService) => {
    expect(service).toBeTruthy();
  }));
});
