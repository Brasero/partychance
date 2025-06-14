import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-inter",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          primary_outline:"bg-background border-primary border-solid border-2 text-primary hover:bg-primary/90 hover:text-white",
          destructive:
              "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
              "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          secondary_outline:"bg-background border-secondary border-solid border-2 text-secondary hover:bg-secondary/90 hover:text-white",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 px-3",
          lg: "h-11 px-8",
          icon: "h-10 w-10",
        },
        radius:{
          md:"rounded-md",
          full:"rounded-full",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
        radius:"md"
      },
    }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }