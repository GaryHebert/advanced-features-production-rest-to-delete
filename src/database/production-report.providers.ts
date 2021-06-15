import { InfluxDB } from 'influx';
export const TRENDS_DATABASE_NAME = 'production-report-value';
export const influx = new InfluxDB({
  host: 'localhost',
  port: 8086,
  database: 'production-report-value',
  username: 'root',
  password: 'test_pass',
});
