// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ValidHeadOfficeLocation = {
  "DE": "DE",
  "EU": "EU",
  "NONEU": "NONEU"
};

const { Provider, Details, EmailsWeReceive, Properties } = initSchema(schema);

export {
  Provider,
  ValidHeadOfficeLocation,
  Details,
  EmailsWeReceive,
  Properties
};