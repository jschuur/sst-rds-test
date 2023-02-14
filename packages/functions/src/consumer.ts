import { createEntry } from '../../core/src/log';

export async function main() {
  console.log('Adding entry from consumer');

  const response = await createEntry('test', 'test message');

  return { response };
}
