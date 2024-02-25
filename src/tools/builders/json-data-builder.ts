import { get, set } from 'lodash';

export interface IPlan {
  planIdentifer: string;
  totalAmount: number;
  taxesAmount?: number;
  taxRate: number;
  pricePerUnit: number;
  unitsOrdered: number;
}

export interface ICalculationAgreement {
  agreementIdentifier: string;
  totalAmount: number;
}

export interface ICalculationState {
  planIdentifer: string;
  agreementIdentifier: string;
  stateCode: string;
  totalAmount: number;
}

export interface IDataTemplate {
  plan: IPlan;
  calculationByAgreement: ICalculationAgreement;
  calculationByState: ICalculationState[];
  normalizedData?: any;
}

export class JSONDataBuilder {
  jsonTemplate: IDataTemplate;

  constructor(planId: string, seedJSON: IDataTemplate) {
    this.jsonTemplate = seedJSON;
  }

  withTemplate(jsonObject: IDataTemplate): JSONDataBuilder {
    this.jsonTemplate = jsonObject;
    return this;
  }

  withPlan(jsonObject: IPlan): JSONDataBuilder {
    this.jsonTemplate = {
      ...this.jsonTemplate,
      plan: jsonObject,
    };
    return this;
  }

  withCalculationAgreement(jsonObject: ICalculationAgreement): JSONDataBuilder {
    this.jsonTemplate = {
      ...this.jsonTemplate,
      calculationByAgreement: jsonObject,
    };
    return this;
  }

  withCalculationStates(jsonObject: ICalculationState[]): JSONDataBuilder {
    this.jsonTemplate = {
      ...this.jsonTemplate,
      calculationByState: jsonObject,
    };
    return this;
  }

  withPath(jsonPath: string, jsonValue: any): JSONDataBuilder {
    set(this.jsonTemplate, jsonPath, jsonValue);
    return this;
  }

  build(): IDataTemplate {
    return this.jsonTemplate;
  }
}
