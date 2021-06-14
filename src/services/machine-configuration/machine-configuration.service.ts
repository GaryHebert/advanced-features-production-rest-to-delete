import { Injectable } from '@nestjs/common';
import { MachineConfiguration } from '../../entities/machine-configuration';

@Injectable()
export class MachineConfigurationService {
  getMachineConfiguration(): MachineConfiguration {
    return null;
  }
}
