import Link from "next/link"
import { ArrowRight, CheckCircle2, Calculator, Briefcase, FileText, Building2 } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-32 lg:py-40 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative mx-auto max-w-5xl text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            Smart Financial Decisions. <br className="hidden md:block" />
            <span className="text-primary">Stronger Businesses.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Professional taxation, accounting, compliance and financial advisory solutions designed to help businesses stay compliant, organized and financially confident.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/services" 
              className={buttonVariants({ 
                size: "lg", 
                variant: "outline", 
                className: "w-full sm:w-auto border-primary/30 bg-card text-foreground hover:bg-primary/5 hover:border-primary shadow-xs font-medium" 
              })}
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial and corporate solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Taxation", icon: Calculator, desc: "Income Tax, GST, Tax Planning, and Return Filing ensuring maximum efficiency." },
              { title: "Accounting", icon: FileText, desc: "Accurate bookkeeping, financial statements, and reconciliation." },
              { title: "Corporate Compliance", icon: Building2, desc: "Company Registration, ROC Compliance, and Annual Filings." },
              { title: "Financial Advisory", icon: Briefcase, desc: "Cash flow planning, business structuring, and strategic financial analysis." },
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <Link 
                    href="/services" 
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs"
                  >
                    Learn more <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Reminder Preview */}
      <section className="pt-10 pb-20 md:pt-12 md:pb-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white dark:bg-slate-950 rounded-3xl p-8 md:p-12 shadow-xl border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold">Never Miss a Compliance Deadline</h2>
                <p className="text-muted-foreground">
                  Stay ahead of every deadline with our dynamic compliance calendar. Get automated reminders for GST returns, ROC filings, and Income Tax deadlines.
                </p>
                <ul className="space-y-2 mt-4">
                  {["GST Returns", "TDS Payments", "ROC Annual Filings"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link 
                    href="/compliance-calendar" 
                    className={buttonVariants({ 
                      variant: "default", 
                      size: "lg", 
                      className: "gap-2 shadow-sm font-semibold" 
                    })}
                  >
                    View Compliance Calendar <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full bg-slate-100 dark:bg-slate-800 rounded-xl p-6 border space-y-4">
                 <div className="bg-background rounded-xl p-5 md:p-6 border shadow-sm flex justify-between items-center gap-4">
                    <div>
                      <p className="font-semibold text-sm">GSTR-1 Filing</p>
                      <p className="text-xs text-muted-foreground">Monthly Return</p>
                    </div>
                    <span className="px-2.5 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs rounded-full font-medium shrink-0">
                      Due in 3 days
                    </span>
                 </div>
                 <div className="bg-background rounded-xl p-5 md:p-6 border shadow-sm flex justify-between items-center gap-4">
                    <div>
                      <p className="font-semibold text-sm">TDS Deposit</p>
                      <p className="text-xs text-muted-foreground">Monthly Compliance</p>
                    </div>
                    <span className="px-2.5 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs rounded-full font-medium shrink-0">
                      Due in 7 days
                    </span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to streamline your business compliance?</h2>
          <p className="text-lg text-primary-foreground/80">
            Partner with us to ensure your business remains compliant, financially healthy, and ready for growth.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg", variant: "secondary", className: "text-primary" })}>Schedule a Free Consultation</Link>
        </div>
      </section>
    </div>
  )
}
