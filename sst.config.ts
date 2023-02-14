import { SSTConfig } from 'sst';
import { Stack } from './stacks/Stack.js';

declare let process: {
  env: {
    DATABASE_URL: string;
  };
};

export default {
  config(_input) {
    return {
      name: 'sst2-test',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      environment: {
        DATABASE_URL: process.env.DATABASE_URL,
      },
    });

    app.stack(Stack);
  },
} satisfies SSTConfig;
