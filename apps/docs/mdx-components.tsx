import { cn } from '@/lib/utils';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    components,
...defaultComponents,   
    h1: ({className,...props}) => <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />,
    h2: ({className,...props}) => <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />,
    h3: ({className,...props}) => <h3
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />,
    h4: ({className,...props}) => <h4
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />,
    Tab,
    Tabs,
    
   } 
  };