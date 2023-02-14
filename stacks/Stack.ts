import { Api, Queue, StackContext } from 'sst/constructs';

export function Stack({ stack }: StackContext) {
  const queue = new Queue(stack, 'Queue', {
    consumer: 'packages/functions/src/consumer.main',
  });

  const api = new Api(stack, 'api', {
    defaults: {
      function: {
        bind: [queue],
      },
    },
    routes: {
      'GET /': 'packages/functions/src/list.handler',
      'GET /create': 'packages/functions/src/create.handler',
      'GET /hello': 'packages/functions/src/hello.handler',
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return api;
}
