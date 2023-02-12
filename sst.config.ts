import { SSTConfig } from 'sst';

export default {
  config(_input) {
    return {
      name: 'sst-rds-test',
      region: 'us-east-1',
    };
  },
  stacks(app) {},
} satisfies SSTConfig;
