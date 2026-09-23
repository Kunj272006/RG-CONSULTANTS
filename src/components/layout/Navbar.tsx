"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Compliance Calendar", href: "/compliance-calendar" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-12 w-56 md:h-14 md:w-64">
              <Image 
                src="/logo.png" 
                alt="RG Consultants Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "transition-colors text-sm font-medium",
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          })}
          <Link href="/contact" className={buttonVariants({ className: "gap-1.5 font-medium" })}>
            Book a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger className={buttonVariants({ variant: "ghost", className: "px-2" })}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "block px-2 py-1 text-lg font-medium transition-colors",
                        isActive
                          ? "text-primary font-semibold border-l-2 border-primary pl-2"
                          : "text-foreground/70 hover:text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                <div className="mt-4 px-2">
                  <Link href="/contact" className={buttonVariants({ className: "w-full gap-1.5 font-medium" })}>
                    Book a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
