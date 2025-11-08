import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/utJYSHx9JF',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
