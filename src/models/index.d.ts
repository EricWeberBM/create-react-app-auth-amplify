import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ValidHeadOfficeLocation {
  DE = "DE",
  EU = "EU",
  NONEU = "NONEU"
}

export declare class Details {
  readonly Name?: string | null;
  readonly Description?: string | null;
  readonly HeadOfficeLocation?: ValidHeadOfficeLocation | keyof typeof ValidHeadOfficeLocation | null;
  readonly InfolineMail?: string | null;
  readonly ComplaintMail?: string | null;
  readonly Website?: string | null;
  constructor(init: ModelInit<Details>);
}

export declare class EmailsWeReceive {
  readonly Voucher?: boolean | null;
  readonly Cancellation?: boolean | null;
  readonly Confirmation?: boolean | null;
  constructor(init: ModelInit<EmailsWeReceive>);
}

export declare class Properties {
  readonly IsSupplyingCars?: boolean | null;
  readonly ShouldPerformPriceCheck?: boolean | null;
  readonly HasCustomLookupPage?: boolean | null;
  constructor(init: ModelInit<Properties>);
}

export declare class Provider {
  readonly id: string;
  readonly Details?: Details | null;
  readonly EmailsWeReceive?: EmailsWeReceive | null;
  readonly Properties?: Properties | null;
  constructor(init: ModelInit<Provider>);
  static copyOf(source: Provider, mutator: (draft: MutableModel<Provider>) => MutableModel<Provider> | void): Provider;
}