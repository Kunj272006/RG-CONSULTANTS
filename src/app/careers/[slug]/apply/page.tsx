import { ArrowLeft, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default async function JobApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // In a real app, fetch job details using the slug to display the title
  const jobTitle = "Senior Tax Consultant"

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl space-y-8">
        <Link href={`/careers/${slug}`} className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to job details
        </Link>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border shadow-sm space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Submit Application</h1>
            <p className="text-muted-foreground">Applying for: <strong className="text-foreground">{jobTitle}</strong></p>
          </div>

          <form className="space-y-8">
            {/* Personal Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">Full Name <span className="text-red-500">*</span></label>
                  <Input id="fullName" name="fullName" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number <span className="text-red-500">*</span></label>
                  <Input id="phone" name="phone" placeholder="+91 98765 43210" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="dob" className="text-sm font-medium">Date of Birth</label>
                  <Input id="dob" name="dob" type="date" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="location" className="text-sm font-medium">Current Location</label>
                  <Input id="location" name="location" placeholder="City, State" />
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Professional Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="qualification" className="text-sm font-medium">Highest Qualification <span className="text-red-500">*</span></label>
                  <Input id="qualification" name="qualification" placeholder="CA / MBA / B.Com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="college" className="text-sm font-medium">College/University</label>
                  <Input id="college" name="college" placeholder="Name of Institution" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium">Years of Experience <span className="text-red-500">*</span></label>
                  <Input id="experience" name="experience" placeholder="e.g., 5" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="currentCompany" className="text-sm font-medium">Current Company</label>
                  <Input id="currentCompany" name="currentCompany" placeholder="If currently employed" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="currentRole" className="text-sm font-medium">Current Job Role</label>
                  <Input id="currentRole" name="currentRole" placeholder="e.g., Tax Manager" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="skills" className="text-sm font-medium">Key Skills</label>
                  <Input id="skills" name="skills" placeholder="e.g., GST, Income Tax, Auditing, Excel" />
                </div>
              </div>
            </div>

            {/* Links & Documents */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Links & Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn URL</label>
                  <Input id="linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
                </div>
                <div className="space-y-2">
                  <label htmlFor="portfolio" className="text-sm font-medium">Portfolio URL</label>
                  <Input id="portfolio" name="portfolio" type="url" placeholder="https://..." />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="coverLetter" className="text-sm font-medium">Cover Letter</label>
                <Textarea id="coverLetter" name="coverLetter" placeholder="Briefly explain why you are a good fit for this role..." rows={5} />
              </div>

              <div className="space-y-2 pt-2">
                <label htmlFor="resume" className="text-sm font-medium">Resume/CV <span className="text-red-500">*</span></label>
                <div className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer relative">
                  <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" className="absolute inset-0 opacity-0 cursor-pointer h-full" required />
                  <Upload className="w-8 h-8 text-muted-foreground mb-4" />
                  <p className="font-medium text-sm">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">Submit Application</Button>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Your application is secure and will only be viewed by our hiring team.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
