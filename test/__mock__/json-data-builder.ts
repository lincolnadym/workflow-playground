import { IDataTemplate } from '../../src/tools';

export const mockJSONTemplate1: IDataTemplate = {
  plan: {
    planIdentifer: '3e7f8e2b-e03a-40a8-9be6-ddfee8ed898c',
    totalAmount: 1000,
    taxesAmount: 0,
    taxRate: 0.05,
    pricePerUnit: 10,
    unitsOrdered: 10,
  },
  calculationByAgreement: {
    agreementIdentifier: '4be83ddb-441c-4907-8e24-62755b582ea0',
    totalAmount: 10000,
  },
  calculationByState: [
    {
      planIdentifer: '3e7f8e2b-e03a-40a8-9be6-ddfee8ed898c',
      agreementIdentifier: '4be83ddb-441c-4907-8e24-62755b582ea0',
      stateCode: 'NY',
      totalAmount: 1299,
    },
    {
      planIdentifer: '3e7f8e2b-e03a-40a8-9be6-ddfee8ed898c',
      agreementIdentifier: '4be83ddb-441c-4907-8e24-62755b582ea0',
      stateCode: 'NH',
      totalAmount: 1301,
    },
    {
      planIdentifer: '3e7f8e2b-e03a-40a8-9be6-ddfee8ed898c',
      agreementIdentifier: '4be83ddb-441c-4907-8e24-62755b582ea0',
      stateCode: 'PA',
      totalAmount: 2500,
    },
  ],
};

export const mockJSONTemplate2: IDataTemplate = {
  plan: {
    planIdentifer: '63dbe50a-8722-4424-bf08-152e5ce5b26b',
    totalAmount: 1000,
    taxesAmount: 0,
    taxRate: 0.05,
    pricePerUnit: 10,
    unitsOrdered: 10,
  },
  calculationByAgreement: {
    agreementIdentifier: 'c8368236-b51c-4c23-8727-17289fbd446b',
    totalAmount: 10000,
  },
  calculationByState: [
    {
      planIdentifer: '63dbe50a-8722-4424-bf08-152e5ce5b26b',
      agreementIdentifier: 'c8368236-b51c-4c23-8727-17289fbd446b',
      stateCode: 'NY',
      totalAmount: 1299,
    },
    {
      planIdentifer: '63dbe50a-8722-4424-bf08-152e5ce5b26b',
      agreementIdentifier: 'c8368236-b51c-4c23-8727-17289fbd446b',
      stateCode: 'NH',
      totalAmount: 1301,
    },
  ],
};
