import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody, DocsCategory, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';

import { metadataImage } from '@/lib/metadata';
import { openapi, source } from '@/lib/source';
import { getSiteUrl } from '@/utils/site';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents, APIPage: openapi.APIPage }} />
        {page.data.index ? <DocsCategory page={page} from={source} /> : null}
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const metadataBase = new URL(getSiteUrl());

  return metadataImage.withImage(page.slugs, {
    metadataBase,
    title: page.data.title,
    description: page.data.description,
    keywords: page.data.keywords,
  });
}
