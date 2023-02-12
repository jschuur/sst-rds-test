import { SSTConfig } from 'sst';
import { API } from './stacks/Api.js';
import { Database } from './stacks/Database.js';

export default {
  config(_input) {
    return {
      name: 'sst-rds-test',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(Database).stack(API);
  },
} satisfies SSTConfig;
