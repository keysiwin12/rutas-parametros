import { TestBed } from '@angular/core/testing';

import { RutasParametrosService } from './rutas-parametros.service';

describe('RutasParametrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RutasParametrosService = TestBed.get(RutasParametrosService);
    expect(service).toBeTruthy();
  });
});
