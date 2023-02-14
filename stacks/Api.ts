import { Api, StackContext } from 'sst/constructs';

export function API({ stack }: StackContext) {
  const api = new Api(stack, 'api', {
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
