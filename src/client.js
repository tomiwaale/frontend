import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'xdi8igmg',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skxmVq0f7z1WQQbpcATCWacUb36ye4ZQn9jl6XiW4bTH101rwMzvB4c7HuDl28e0REuAYTM3i2FUZQmktUmHRZG0p6hCBz1u7a2DptJtc8eh7k9cWknqIi5HjN8yf1zMjvtxL39AKGirwYFehjvUrG7VjgEgWvBv3rDDncOOy6W8AM6tDSIB',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);