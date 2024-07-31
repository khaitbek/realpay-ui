import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { classnames as cn } from "@hayitbek/realpay-utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-3 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success:
          "border-transparent bg-success text-success-foreground hover: bg-sucess/80",
        outlineDestructive: "text-destructive border-destructive",
        outlineSuccess: "text-success border-success",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeProps<T extends React.ElementType> = React.ComponentProps<T> &
  VariantProps<typeof badgeVariants> & {
    as: T;
  };

const Badge = <T extends React.ElementType = "div">({
  className,
  variant,
  as: Component,
  ...props
}: BadgeProps<T>) => {
  return (
    <Component
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
};

export { Badge, badgeVariants };
