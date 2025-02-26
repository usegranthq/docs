export const getSiteUrl = () => {
  if (process.env.VERCEL_ENV === 'production') {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_ENV === 'preview') {
    const url = process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL;
    return `https://${url}`;
  }

  return `http://localhost:${process.env.PORT || 3000}`;
};
