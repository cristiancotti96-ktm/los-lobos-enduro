
"use client"

import * as React from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction } from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const ToastProviderOriginal = ToastProvider

const ToastViewportOriginal = React.forwardRef<
    React.ElementRef<typeof ToastViewport>,
    React.ComponentPropsWithoutRef<typeof ToastViewport>
>(({ className, ...props }, ref) => (
    <ToastViewport
        ref={ref}
        className={cn(
            "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
            className
        )}
        {...props}
    />
))
ToastViewportOriginal.displayName = ToastViewport.displayName

const toastVariants = cva(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive:
                    "destructive group border-destructive bg-destructive text-destructive-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const ToastOriginal = React.forwardRef<
    React.ElementRef<typeof Toast>,
    React.ComponentPropsWithoutRef<typeof Toast> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
    return (
        <Toast
            ref={ref}
            className={cn(toastVariants({ variant }), className)}
            {...props}
        />
    )
})
ToastOriginal.displayName = Toast.displayName

const ToastActionOriginal = React.forwardRef<
    React.ElementRef<typeof ToastAction>,
    React.ComponentPropsWithoutRef<typeof ToastAction>
>(({ className, ...props }, ref) => (
    <ToastAction
        ref={ref}
        className={cn(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
            className
        )}
        {...props}
    />
))
ToastActionOriginal.displayName = ToastAction.displayName

const ToastCloseOriginal = React.forwardRef<
    React.ElementRef<typeof ToastClose>,
    React.ComponentPropsWithoutRef<typeof ToastClose>
>(({ className, ...props }, ref) => (
    <ToastClose
        ref={ref}
        className={cn(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            className
        )}
        toast-close=""
        {...props}
    >
        <Cross2Icon className="h-4 w-4" />
    </ToastClose>
))
ToastCloseOriginal.displayName = ToastClose.displayName

const ToastTitleOriginal = React.forwardRef<
    React.ElementRef<typeof ToastTitle>,
    React.ComponentPropsWithoutRef<typeof ToastTitle>
>(({ className, ...props }, ref) => (
    <ToastTitle
        ref={ref}
        className={cn("text-sm font-semibold", className)}
        {...props}
    />
))
ToastTitleOriginal.displayName = ToastTitle.displayName

const ToastDescriptionOriginal = React.forwardRef<
    React.ElementRef<typeof ToastDescription>,
    React.ComponentPropsWithoutRef<typeof ToastDescription>
>(({ className, ...props }, ref) => (
    <ToastDescription
        ref={ref}
        className={cn("text-sm opacity-90", className)}
        {...props}
    />
))
ToastDescriptionOriginal.displayName = ToastDescription.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
    ToastProviderOriginal as ToastProvider,
    ToastViewportOriginal as ToastViewport,
    ToastOriginal as Toast,
    ToastTitleOriginal as ToastTitle,
    ToastDescriptionOriginal as ToastDescription,
    ToastCloseOriginal as ToastClose,
    ToastActionOriginal as ToastAction,
}
