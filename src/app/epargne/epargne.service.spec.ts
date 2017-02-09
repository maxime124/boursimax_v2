/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EpargneService } from './epargne.service';

describe('EpargneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpargneService]
    });
  });

  it('should ...', inject([EpargneService], (service: EpargneService) => {
    expect(service).toBeTruthy();
  }));
});
