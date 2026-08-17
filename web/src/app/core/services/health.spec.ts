import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { Health } from './health';

describe('Health', () => {
  let service: Health;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(Health);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
