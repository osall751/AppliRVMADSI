import { TestBed } from '@angular/core/testing';

import { MadsiRendezVousService } from './madsi-rendez-vous.service';

describe('MadsiRendezVousService', () => {
  let service: MadsiRendezVousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadsiRendezVousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
