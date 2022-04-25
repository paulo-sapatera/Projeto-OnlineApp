/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TarefaServiceService } from './tarefaService.service';

describe('Service: TarefaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TarefaServiceService]
    });
  });

  it('should ...', inject([TarefaServiceService], (service: TarefaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
