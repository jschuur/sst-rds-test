import { ApiHandler } from 'sst/node/api';

import { listEntries } from '../../core/src/log';

export const handler = ApiHandler(async (_evt) => {
  const logEntries = await listEntries();

  return {
    body: JSON.stringify({ logEntries }, null, 2),
  };
});
