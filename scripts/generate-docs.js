import * as OpenAPI from 'fumadocs-openapi';
import { rimraf } from 'rimraf';

const out = './content/docs/api';

async function generate() {
  // clean generated files
  await rimraf(out, {
    filter(v) {
      return !v.endsWith('index.mdx') && !v.endsWith('meta.json');
    },
  });

  await OpenAPI.generateFiles({
    input: ['https://sdk.usegrant.dev/open-api.json'],
    output: out,
    includeDescription: true,
    groupBy: 'tag',
  });
}

void generate();
