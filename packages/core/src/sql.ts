import RDSDataService from 'aws-sdk/clients/rdsdataservice';
import { Kysely, Selectable } from 'kysely';
import { DataApiDialect } from 'kysely-data-api';
import { RDS } from 'sst/node/rds';
import { Database } from './sql.generated.js';

// see https://github.com/serverless-stack/kysely-data-api
export const DB = new Kysely<Database>({
  dialect: new DataApiDialect({
    mode: 'postgres',
    driver: {
      secretArn: RDS.db.secretArn,
      resourceArn: RDS.db.clusterArn,
      database: RDS.db.defaultDatabaseName,
      client: new RDSDataService(),
    },
  }),
});

export type Row = {
  [Key in keyof Database]: Selectable<Database[Key]>;
};

export * as SQL from './sql';
