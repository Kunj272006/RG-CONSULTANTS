import { Briefcase, MapPin, Clock, IndianRupee } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const jobs = [
  {
    id: 1,
    title: "Senior Tax Consultant",
    slug: "senior-tax-consultant",
    department: "Taxation",
    location: "New Delhi, On-site",
    employmentType: "Full-time",
    experience: "5-8 Years",
    closingDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 15), // 15 days from now
  },
  {
    id: 2,
    title: "Accounts Executive",
    slug: "accounts-executive",
    department: "Accounting",
    location: "Remote",
    employmentType: "Full-time",
    experience: "2-4 Years",
    closingDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7), // 7 days from now
  },
  {
    id: 3,
    title: "Corporate Secretarial Assistant",
    slug: "corporate-secretarial-assistant",
    department: "Corporate Compliance",
    location: "New Delhi, Hybrid",
    employmentType: "Full-time",
    experience: "1-3 Years",
    closingDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 20),
  }
]

export default function CareersPage() {
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Build Your Career With <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a team of passionate professionals dedicated to providing top-tier financial and corporate compliance services.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
          {jobs.map((job) => (
            <div key={job.id} className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-primary font-medium text-sm mt-1">{job.department}</p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {job.employmentType}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1.5" />
                    {job.experience}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-4">
                <div className="text-sm text-muted-foreground">
                  Closes: {job.closingDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
                <Link href={`/careers/${job.slug}`} className={buttonVariants({})}>View Position</Link>
              </div>
            </div>
          ))}

          {jobs.length === 0 && (
            <div className="bg-white dark:bg-slate-900 p-12 rounded-2xl border text-center text-muted-foreground">
              <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No current job openings. Please check back later.</p>
            </div>
          )}
        </div>
      </div>

      {/* Office Gallery Section */}
      <section className="py-16 mt-16 md:py-24 bg-muted/30 -mx-4 md:-mx-0 px-4 rounded-xl border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Workspace</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">A premium environment designed for collaboration and precision.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-video rounded-lg overflow-hidden border bg-background shadow-sm">
            <img src="/office/office-1.jpg" alt="Office Workspace" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden border bg-background shadow-sm">
            <img src="/office/office-2.jpg" alt="Office Workstations" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden border bg-background shadow-sm">
            <img src="/office/office-3.jpg" alt="Office Cabin" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden border bg-background shadow-sm">
            <img src="/office/office-4.jpg" alt="Office Desk" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>
    </div>
  )
}
