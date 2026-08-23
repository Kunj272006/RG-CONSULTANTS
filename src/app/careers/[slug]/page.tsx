import { MapPin, Clock, Briefcase, ArrowLeft } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"

// In a real app, this would be fetched from the database using the slug
const jobDetails = {
  title: "Senior Tax Consultant",
  department: "Taxation",
  location: "New Delhi, On-site",
  employmentType: "Full-time",
  experience: "5-8 Years",
  closingDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 15),
  description: "We are looking for a Senior Tax Consultant to lead our taxation advisory team. You will be responsible for handling complex corporate tax matters, GST structuring, and representing clients before tax authorities.",
  responsibilities: [
    "Advising corporate clients on complex domestic and international tax matters.",
    "Overseeing the preparation and filing of income tax and GST returns.",
    "Representing clients in tax assessments and appellate proceedings.",
    "Mentoring junior tax associates and reviewing their work.",
    "Staying updated with the latest amendments in tax laws and communicating impacts to clients."
  ],
  requirements: [
    "Qualified Chartered Accountant (CA) with 5-8 years of post-qualification experience.",
    "In-depth knowledge of the Income Tax Act, 1961 and GST laws.",
    "Proven experience in handling tax assessments and appeals.",
    "Excellent analytical, communication, and client management skills.",
    "Ability to work in a fast-paced consulting environment."
  ]
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        <Link href="/careers" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all jobs
        </Link>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border shadow-sm space-y-12">
          {/* Header */}
          <div className="space-y-6 pb-8 border-b">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{jobDetails.title}</h1>
              <p className="text-primary font-medium text-lg">{jobDetails.department}</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {jobDetails.location}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {jobDetails.employmentType}
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                {jobDetails.experience}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold">About the Role</h2>
              <p>{jobDetails.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Key Responsibilities</h2>
              <ul>
                {jobDetails.responsibilities.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold">Requirements</h2>
              <ul>
                {jobDetails.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Action */}
          <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              Application Closes: <strong className="text-foreground">{jobDetails.closingDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</strong>
            </p>
            <Link href={`/careers/${slug}/apply`} className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
