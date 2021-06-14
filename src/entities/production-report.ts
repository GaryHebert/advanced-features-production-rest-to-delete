import { ProductionReportValue } from './production-report-value';
import { MachineConfiguration } from './machine-configuration';

export class ProductionReport {
  startDate: Date;
  endDate: Date;
  machineConfiguration: MachineConfiguration;
  reportValues: ProductionReportValue[];
}
