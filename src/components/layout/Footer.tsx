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
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Important</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/compliance-calendar" className="hover:text-primary transition-colors">Compliance Calendar</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://maps.app.goo.gl/vLKUXje7yHTtt7CH6" target="_blank" className="hover:text-primary transition-colors">A3, Green Building, Laxmi Enclave, Dehrakhas, Dehradun, Uttarakhand 248001</a></li>
              <li>rachitgardca1992@gmail.com</li>
              <li>8171223939</li>
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
