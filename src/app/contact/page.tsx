import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Book a <span className="text-primary">Consultation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our experts to discuss how we can help your business stay compliant and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border shadow-sm space-y-8">
              <h3 className="text-xl font-bold">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Office Address</h4>
                    <p className="text-muted-foreground text-sm mt-1"><a href="https://maps.app.goo.gl/vLKUXje7yHTtt7CH6" target="_blank" className="hover:text-primary transition-colors">A3, Green Building, Laxmi Enclave, Dehrakhas, Dehradun, Uttarakhand 248001</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground text-sm mt-1">8171223939</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground text-sm mt-1">rachitgardca1992@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Working Hours</h4>
                    <p className="text-muted-foreground text-sm mt-1">Mon - Fri: 11 am - 7 pm <br/> Saturday: 11 am - 3 pm <br/> Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name <span className="text-red-500">*</span></label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number <span className="text-red-500">*</span></label>
                    <Input id="phone" name="phone" placeholder="8171223939" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                    <Input id="company" name="company" placeholder="ABC Pvt Ltd" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">Service Required <span className="text-red-500">*</span></label>
                  <Select name="service" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="taxation">Taxation (Income Tax / GST)</SelectItem>
                      <SelectItem value="accounting">Accounting & Bookkeeping</SelectItem>
                      <SelectItem value="compliance">Corporate Compliance</SelectItem>
                      <SelectItem value="advisory">Financial Advisory</SelectItem>
                      <SelectItem value="cloud">Cloud Accounting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium">Preferred Date</label>
                    <Input id="date" name="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium">Preferred Time</label>
                    <Input id="time" name="time" type="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" name="message" placeholder="Please briefly describe your requirements..." rows={4} />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">Submit Request</Button>
                
                <p className="text-xs text-muted-foreground mt-4 text-center md:text-left">
                  By submitting this form, you agree to our privacy policy. Your information is kept strictly confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
