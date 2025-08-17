import { createOpenAPI } from 'fumadocs-openapi/server';

export const openapi = createOpenAPI({
  input: ['https://sdk.usegrant.dev/open-api.json'],
});
