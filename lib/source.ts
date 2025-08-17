import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { attachFile } from 'fumadocs-openapi/server';

import { docs, meta } from '@/.source';

export const source = loader({
  baseUrl: '/',
  source: createMDXSource(docs, meta),
  pageTree: {
    attachFile,
  },
});
