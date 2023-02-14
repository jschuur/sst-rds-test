export * as Log from './log';

import { ulid } from 'ulid';
import { db } from './db';

export async function createEntry(type: string, message: string) {
  const [result] = await db
    .insertInto('log')
    .values({ entryID: ulid(), type, message })
    .returningAll()
    .execute();
  return result;
}

export function getEntry(entryID: string) {
  return db.selectFrom('log').selectAll().where('entryID', '=', entryID).executeTakeFirst();
}

export function listEntries() {
  return db.selectFrom('log').selectAll().orderBy('created', 'desc').execute();
}
