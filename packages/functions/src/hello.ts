import { Time } from '@sst-rds-test/core/time';
import { ApiHandler } from 'sst/node/api';

export const handler = ApiHandler(async (_evt) => {
  return {
    body: `Hello world. The time is ${Time.now()}`,
  };
});
