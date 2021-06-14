import { Injectable } from '@nestjs/common';
import { ProductionReportValue } from '../../entities/production-report-value';
import { MachineConfiguration } from '../../entities/machine-configuration';
import { influx } from '../../database/production-report.providers';

@Injectable()
export class ProductionReportRetrieverService {
  /*WriteMeasurement functions similarly to InfluxDB#writePoints, but it automatically fills in the measurement value for all points for you.
Example:
 influx.writeMeasurement('perf', [    {      tags: { host: 'box1.example.com' },      fields: { cpu: getCpuUsage(), mem: getMemUsage() },    }  ])*/



  /**
   * Get all production report values of the configuration file.
   */
  getAllProductionReportValues(): Promise<ProductionReportValue[]> {
    influx
      .query('select * from trends', { database: 'production-report-value' })
      .then((data) => {
        console.log(data);
      });
    // influx
    //   .getSeries({ measurement: 'my_measurement', database: 'my_db' })
    //   .then((names) => {
    //     console.log(
    //       'My series names in my_measurement are: ' + names.join(', '),
    //     );
    //   });
    return null;
  }

  /**
   * Get all production for a particular machine configuration.
   *
   * @param machineConfiguration The machine configuration (which equipment compose the machine)
   */
  getProductionReportValues(
    machineConfiguration: MachineConfiguration,
  ): Promise<ProductionReportValue[]> {
    return null;
  }
}
