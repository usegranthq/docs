import { createElement } from 'react';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx/runtime/next';
import { openapiPlugin } from 'fumadocs-openapi/server';
import { icons } from 'lucide-react';

import { docs, meta } from '@/.source';

export const source = loader({
  baseUrl: '/',
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  plugins: [openapiPlugin()],
});
