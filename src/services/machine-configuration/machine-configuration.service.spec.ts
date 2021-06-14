import { Test, TestingModule } from '@nestjs/testing';
import { MachineConfigurationService } from './machine-configuration.service';

describe('MachineConfigurationService', () => {
  let service: MachineConfigurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachineConfigurationService],
    }).compile();

    service = module.get<MachineConfigurationService>(MachineConfigurationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
