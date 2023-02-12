import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { createEntry } from '../../core/src/log';

export const handler: APIGatewayProxyHandlerV2 = async () => {
  try {
    const response = await createEntry('test', 'test message');

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: (e as Error).message,
    };
  }
};
