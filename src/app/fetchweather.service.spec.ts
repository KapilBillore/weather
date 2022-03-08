import { TestBed } from '@angular/core/testing';

import { FetchweatherService } from './fetchweather.service';

describe('FetchweatherService', () => {
  let service: FetchweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
