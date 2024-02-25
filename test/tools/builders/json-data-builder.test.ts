import { Logger } from '../../../src/logger';
import { IDataTemplate, JSONDataBuilder } from '../../../src/tools';
import {
  mockJSONTemplate1,
  mockJSONTemplate2,
} from '../../__mock__/json-data-builder';
import * as util from 'util';

type TMap = {
  [id: string]: string;
};

describe('Map', () => {
  let theBuilder: JSONDataBuilder;

  beforeEach(() => {
    theBuilder = new JSONDataBuilder('', mockJSONTemplate1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Basics', () => {
    test('should initialize with the seed data', async () => {
      expect(theBuilder.build()).toMatchObject(mockJSONTemplate1);
    });

    test('should replace the plan with a new plan', async () => {
      const jsonExpected: IDataTemplate = {
        ...mockJSONTemplate1,
        plan: mockJSONTemplate2.plan,
      };
      theBuilder.withPlan(mockJSONTemplate2.plan);
      expect(theBuilder.build()).toMatchObject(jsonExpected);
    });

    test('should replace the calculation agreement with new json', async () => {
      const jsonExpected: IDataTemplate = {
        ...mockJSONTemplate1,
        calculationByAgreement: mockJSONTemplate2.calculationByAgreement,
      };
      theBuilder.withCalculationAgreement(
        mockJSONTemplate2.calculationByAgreement,
      );
      expect(theBuilder.build()).toMatchObject(jsonExpected);
    });

    test('should replace the calculation states with new json', async () => {
      const jsonExpected: IDataTemplate = {
        ...mockJSONTemplate1,
        calculationByState: mockJSONTemplate2.calculationByState,
      };
      theBuilder.withCalculationStates(mockJSONTemplate2.calculationByState);
      expect(theBuilder.build()).toMatchObject(jsonExpected);
    });

    test('should replace single json path value correctly', async () => {
      const jsonExpected: IDataTemplate = {
        ...mockJSONTemplate1,
        plan: {
          ...mockJSONTemplate1.plan,
          planIdentifer: 'a741a947-5719-4ad9-b962-d0b44855938e',
          totalAmount: 1111,
        },
      };
      theBuilder
        .withPath('plan.planIdentifer', 'a741a947-5719-4ad9-b962-d0b44855938e')
        .withPath('plan.totalAmount', 1111);
      Logger.info('-  -');
      Logger.info(util.inspect(theBuilder.build(), false, null));
      expect(theBuilder.build()).toMatchObject(jsonExpected);
    });
  });
  test('should replace json object using path correctly', async () => {
    const jsonExpected: IDataTemplate = {
      ...mockJSONTemplate1,
      plan: {
        ...mockJSONTemplate1.plan,
        planIdentifer: 'a741a947-5719-4ad9-b962-d0b44855938e',
        totalAmount: 1111,
      },
      calculationByAgreement: {
        agreementIdentifier: 'a741a947-5719-4ad9-b962-d0b44855938e',
        totalAmount: 22222,
      },
    };
    theBuilder
      .withPath('plan.planIdentifer', 'a741a947-5719-4ad9-b962-d0b44855938e')
      .withPath('plan.totalAmount', 1111)
      .withPath('calculationByAgreement', {
        agreementIdentifier: 'a741a947-5719-4ad9-b962-d0b44855938e',
        totalAmount: 22222,
      });
    Logger.info('- theBuilder.build() -');
    Logger.info(util.inspect(theBuilder.build(), false, null));
    expect(theBuilder.build()).toMatchObject(jsonExpected);
  });
});
