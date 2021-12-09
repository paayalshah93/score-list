import { TestBed } from '@angular/core/testing';

import { MarksListService } from './marks-list.service';

describe('MarksListService', () => {
  let service: MarksListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarksListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
