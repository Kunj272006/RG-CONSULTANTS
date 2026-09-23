import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="relative h-16 w-64">
              <Image 
                src="/logo.png" 
                alt="RG Consultants Logo" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Professional taxation, accounting, compliance and financial advisory solutions designed to help businesses stay compliant, organized and financially confident.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs">Home</Link></li>
              <li><Link href="/about" className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs">About Us</Link></li>
              <li><Link href="/services" className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs">Services</Link></li>
              <li><Link href="/contact" className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Important</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/compliance-calendar" className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs">Compliance Calendar</Link></li>
              <li><Link href="/careers" className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs">Careers</Link></li>
              <li><Link href="/privacy" className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="https://maps.app.goo.gl/vLKUXje7yHTtt7CH6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs inline-block"
                >
                  A3, Green Building, Laxmi Enclave, Dehrakhas, Dehradun, Uttarakhand 248001
                </a>
              </li>
              <li>
                <a 
                  href="mailto:rachitgargca1992@gmail.com" 
                  className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs inline-block"
                >
                  rachitgargca1992@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918171223939" 
                  className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs inline-block"
                  aria-label="Call +91 81712 23939"
                >
                  +91 81712 23939
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} RG Consultants. All rights reserved.</p>
          <p className="text-xs max-w-lg text-center md:text-right opacity-70">
            Disclaimer: Information provided is general in nature. Compliance dates may change due to government notifications. Please consult professionally for specific advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
