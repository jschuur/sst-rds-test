import RDSDataService from 'aws-sdk/clients/rdsdataservice';
import { Kysely, Selectable } from 'kysely';
import { DataApiDialect } from 'kysely-data-api';
import { RDS } from 'sst/node/rds';

// via https://github.com/koskimas/kysely#minimal-example
interface LogTable {
  entryID: string;
  type: string;
  message: string;
  created?: Date;
}

interface Database {
  log: LogTable;
}

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
