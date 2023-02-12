import { Kysely, sql } from 'kysely';

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  await db.schema
    .createTable('log')
    .addColumn('entryID', 'text', (col) => col.primaryKey())
    .addColumn('type', 'text', (col) => col.notNull())
    .addColumn('message', 'text', (col) => col.notNull())
    .addColumn('created', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
    .execute();

  await db.schema.createIndex('idx_log_created').on('log').column('created').execute();
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
  await db.schema.dropIndex('idx_log_created').execute();
  await db.schema.dropTable('log').execute();
}
