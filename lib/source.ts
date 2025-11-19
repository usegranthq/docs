import { createElement } from 'react';
import { loader } from 'fumadocs-core/source';
import { docs, meta } from 'fumadocs-mdx:collections/server';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { openapiPlugin } from 'fumadocs-openapi/server';
import { icons } from 'lucide-react';

export const source = loader({
  baseUrl: '/',
  source: toFumadocsSource(docs, meta),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  plugins: [openapiPlugin()],
});
