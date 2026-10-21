# useGrant docs

Documentation site for [useGrant](https://github.com/usegranthq/app), built with
[Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.dev). It is served at
[usegrant.dev/docs](https://usegrant.dev/docs).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3500/docs](http://localhost:3500/docs). Use `localhost`: Next.js blocks
dev resources for other origins, which leaves the page non-interactive.

## Content

- `content/docs/core`: guides and concepts, written in MDX. Each folder's `meta.json` sets the
  sidebar order.
- `content/docs/api`: API reference pages, generated from the app's OpenAPI specification by
  `npm run genapi`. Don't edit them by hand.
- `components`: custom components available in MDX, registered in `mdx-components.tsx`.

## Build

```bash
npm run build
```

`prebuild` regenerates the API reference first. The app is built with `output: "standalone"` and
served under the `/docs` base path, with assets under `/docs-static`.

## Deployment

Pushes to `master` deploy to Vercel through the [GitHub Actions workflow](./.github/workflows/deploy.yml). A
`Dockerfile` and `compose.yml` are included for running the site in a container.
