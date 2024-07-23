import { config } from '@hayitbek/realpay-tailwind-config';

const twConfig= {
presets:[config],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/react/*/src/*.tsx',
    './content/**/*.{md,mdx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
	],
    
} 

export default twConfig