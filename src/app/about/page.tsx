import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            About <span className="text-primary">RG Consultants</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in financial excellence and corporate compliance.
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            At RG Consultants, we believe that strong financial foundations are the bedrock of successful businesses. 
            For years, we have been providing premium taxation, accounting, corporate compliance, and financial advisory 
            services to businesses across India.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to simplify complex financial and regulatory landscapes for our clients. We strive to provide 
            accurate, timely, and strategic advice that empowers business owners to make informed decisions and focus 
            on what they do best—growing their business.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { title: "Expert Knowledge", desc: "Deep understanding of Indian taxation and corporate laws." },
              { title: "Proactive Approach", desc: "We anticipate compliance requirements before they become urgent." },
              { title: "Confidentiality", desc: "Your financial data is handled with the highest level of security and discretion." },
              { title: "Long-Term Partnership", desc: "We measure our success by the long-term success of our clients." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
