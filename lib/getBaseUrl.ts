import { cache } from 'react';

const addHttps = (url: string) =>
  url.startsWith('http') ? url : `https://${url}`;

export const getBaseUrl = cache(() =>
  process.env.CF_PAGES_URL
    ? addHttps(process.env.CF_PAGES_URL)
    : `http://127.0.0.1:${process.env.PORT ?? 8788}`,
);
