import { TestBed } from '@angular/core/testing';

import { ProveedorProductoService } from './producto.service';

describe('ProductoService', () => {
  let service: ProveedorProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
