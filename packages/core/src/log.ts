export * as Log from './log';

import { ulid } from 'ulid';
import { SQL } from './sql';

export async function createEntry(type: string, message: string) {
  const [result] = await SQL.DB.insertInto('log')
    .values({ entryID: ulid(), type, message })
    .returningAll()
    .execute();
  return result;
}

export function getEntry(entryID: string) {
  return SQL.DB.selectFrom('log').selectAll().where('entryID', '=', entryID).executeTakeFirst();
}

export function listEntries() {
  return SQL.DB.selectFrom('log').selectAll().orderBy('created', 'desc').execute();
}
