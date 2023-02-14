import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import AWS from 'aws-sdk';
import { Queue } from 'sst/node/queue';

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const sqs = new AWS.SQS();

  try {
    await sqs
      .sendMessage({
        QueueUrl: Queue.Queue.queueUrl,
        MessageBody: JSON.stringify({ ordered: true }),
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent to queue' }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: (e as Error).message,
    };
  }
};
