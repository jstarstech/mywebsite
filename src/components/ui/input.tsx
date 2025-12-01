import { cn } from '@/utilities/ui'
import * as React from 'react'

const Input: React.FC<
  {
    ref?: React.Ref<HTMLInputElement>
    customClassName?: string | undefined
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ type, className, customClassName, ref, ...props }) => {
  const inputClassName = customClassName
    ? customClassName
    : cn(
        'flex h-10 w-full rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )

  return <input className={inputClassName} ref={ref} type={type} {...props} />
}

export { Input }
