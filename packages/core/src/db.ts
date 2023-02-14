import { Kysely, PostgresDialect, Selectable } from 'kysely';
import { DB } from 'kysely-codegen';
import { Pool, PoolConfig } from 'pg';
import { parse } from 'pg-connection-string';

// see https://github.com/koskimas/kysely#minimal-example
export const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool(
      parse(process.env.DATABASE_URL || 'postgres://localhost/kysely_test') as PoolConfig
    ),
  }),
});

export type Row = {
  [Key in keyof DB]: Selectable<DB[Key]>;
};
