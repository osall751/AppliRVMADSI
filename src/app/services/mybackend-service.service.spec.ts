/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MybackendServiceService } from './mybackend-service.service';

describe('Service: MybackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MybackendServiceService]
    });
  });

  it('should ...', inject([MybackendServiceService], (service: MybackendServiceService) => {
    expect(service).toBeTruthy();
  }));
});
