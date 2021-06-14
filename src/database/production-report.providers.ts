// import Influx from 'influx';
import { InfluxDB } from 'influx';

export const influx = new InfluxDB({
  host: 'localhost',
  port: 8086,
  database: 'production-report-value',
  username: 'root',
  password: 'test_pass',
  // schema: [
  //   {
  //     measurement: 'tide',
  //     fields: { height: FieldType.FLOAT },
  //     tags: ['unit', 'location']
  //   }
  // ]
});
