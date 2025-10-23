// /docs is the basePath set in next.config.ts
const basePath = '/docs';

export const getSiteUrl = () => {
  let url = `http://localhost:${process.env.PORT}`;

  if (process.env.NODE_ENV === 'production') {
    url = process.env.SITE_URL!;
  }

  return new URL(basePath, url);
};
