import { Api, StackContext, use } from 'sst/constructs';
import { Database } from './Database';

export function API({ stack }: StackContext) {
  const api = new Api(stack, 'api', {
    defaults: {
      function: {
        bind: [use(Database)],
      },
    },
    routes: {
      'GET /': 'packages/functions/src/list.handler',
      'GET /hello': 'packages/functions/src/hello.handler',
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return api;
}
