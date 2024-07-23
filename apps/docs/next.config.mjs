import { rehypeCode, remarkHeading } from 'fumadocs-core/mdx-plugins';
import { remarkInstall } from 'fumadocs-docgen';
import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX({
  mdxOptions:{
    remarkPlugins:[
      remarkInstall,
      remarkHeading
    ],
    rehypePlugins:[
      [rehypeCode]
    ]    
  }
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages:[]
};

export default withMDX(config);
