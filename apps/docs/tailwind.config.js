import { config } from '@hayitbek/realpay-tailwind-config';
import twTypographyPlugin from "@tailwindcss/typography";

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
   plugins:[
    twTypographyPlugin
   ] 
} 

export default twConfig