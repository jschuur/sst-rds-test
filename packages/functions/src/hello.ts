import { Time } from '@sst-rds-test/core/time';
import { APIGatewayProxyHandlerV2 } from 'aws-lambda';

export const handler: APIGatewayProxyHandlerV2 = async () => {
  return `Hello world. The time is ${Time.now()}`;
};
