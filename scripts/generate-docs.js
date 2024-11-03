import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';

const out = './content/docs/api';

// clean generated files
rimrafSync(out, {
  filter(v) {
    return !v.endsWith('index.mdx') && !v.endsWith('meta.json') && !v.endsWith('intro.mdx');
  },
});

void OpenAPI.generateFiles({
  // input files
  input: ['./openapi.yaml'],
  output: out,
  groupBy: 'tag',
});
