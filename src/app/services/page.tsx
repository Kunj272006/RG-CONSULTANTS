import { Calculator, Briefcase, FileText, Building2, Cloud } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    category: "Taxation",
    icon: Calculator,
    description: "Comprehensive tax solutions to minimize liabilities and ensure complete compliance with latest regulations.",
    features: ["Income Tax Planning & Filing", "GST Registration & Returns", "Corporate Tax Strategy", "Tax Assessment Assistance"],
  },
  {
    category: "Accounting",
    icon: FileText,
    description: "Meticulous financial record-keeping providing clear visibility into your business's financial health.",
    features: ["Bookkeeping Services", "Financial Statement Preparation", "Ledger Management", "Bank Reconciliation"],
  },
  {
    category: "Corporate Compliance",
    icon: Building2,
    description: "End-to-end corporate secretarial services ensuring your business meets all statutory requirements.",
    features: ["Company Registration (Pvt Ltd, LLP)", "ROC Annual Filings", "Secretarial Audit", "Director KYC & Changes"],
  },
  {
    category: "Financial Advisory",
    icon: Briefcase,
    description: "Strategic financial guidance to help your business optimize resources and accelerate growth.",
    features: ["Virtual CFO Services", "Cash Flow Forecasting", "Business Restructuring", "Project Finance & Loan Syndication"],
  },
  {
    category: "Cloud Accounting",
    icon: Cloud,
    description: "Modernize your finance function with automated, secure, and accessible cloud accounting workflows.",
    features: ["Software Setup (Tally, Zoho, Xero)", "Process Automation", "Remote Accounting Support", "Data Migration"],
  }
]

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Our Professional <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of financial and corporate services tailored to meet the unique needs of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl border bg-card hover:shadow-xl transition-all flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold">{service.category}</h2>
              </div>
              <p className="text-muted-foreground mb-8 text-base">
                {service.description}
              </p>
              <div className="mt-auto space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm font-medium">
                      <div className="mr-3 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?service=${encodeURIComponent(service.category)}`} className={buttonVariants({ className: "w-full mt-4" })}>Get Consultation</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
