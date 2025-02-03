import { rimrafSync } from 'rimraf';
import { generateFiles } from 'fumadocs-openapi';

const out = './content/docs/api';

// clean generated files
rimrafSync(out, {
  filter(v) {
    return !v.endsWith('index.mdx') && !v.endsWith('meta.json');
  },
});

void generateFiles({
  // input files
  input: ['./openapi.yaml'],
  output: out,
  groupBy: 'tag',
});
