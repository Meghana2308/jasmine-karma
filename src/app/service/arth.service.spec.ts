import { TestBed } from '@angular/core/testing';

import { ArthService } from './arth.service';

describe('ArthService', () => {
  let service: ArthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('service.add',()=>{
    
    it('should return a positive value when operands are positve',()=>{
      let result = service.add(10,10);
      expect(result).toBe(20);
    });

    it('should return a negative value when operands are negative',()=>{
      expect(service.add(-10,-10)).toBe(-20);
    });
    
    it('should return a same non-zero value  when operands of the operand',()=>{
      expect(service.add(20,0)).toBe(20);
      expect(service.add(0,20)).toBe(20);
    });
  }); 
});
