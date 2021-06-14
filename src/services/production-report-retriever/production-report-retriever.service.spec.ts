import { Test, TestingModule } from '@nestjs/testing';
import { ProductionReportRetrieverService } from './production-report-retriever.service';

describe('ProductionReportRetrieverService', () => {
  let service: ProductionReportRetrieverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductionReportRetrieverService],
    }).compile();

    service = module.get<ProductionReportRetrieverService>(ProductionReportRetrieverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
