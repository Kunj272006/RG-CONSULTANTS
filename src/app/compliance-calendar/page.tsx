import { Calendar, Bell, Filter, Search, Clock, AlertCircle, AlertTriangle, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock Data for the UI
const mockDeadlines = [
  {
    id: 1,
    title: "GSTR-1 Filing",
    category: "GST",
    applicableTo: "All Registered Taxpayers",
    dueDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3), // +3 days
    status: "Due Soon",
  },
  {
    id: 2,
    title: "TDS Deposit (Non-Salary)",
    category: "Income Tax",
    applicableTo: "Deductors",
    dueDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7), // +7 days
    status: "Upcoming",
  },
  {
    id: 3,
    title: "ROC Annual Filing (AOC-4)",
    category: "Corporate Compliance",
    applicableTo: "Private Limited Companies",
    dueDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 2), // -2 days (overdue)
    status: "Overdue",
  },
  {
    id: 4,
    title: "Advance Tax Payment",
    category: "Income Tax",
    applicableTo: "All Assessees",
    dueDate: new Date(), // Today
    status: "Due Today",
  }
]

export default function ComplianceCalendarPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Overdue': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200'
      case 'Due Today': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200'
      case 'Due Soon': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200'
      default: return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Overdue': return <AlertCircle className="w-4 h-4 mr-1.5" />
      case 'Due Today': return <AlertTriangle className="w-4 h-4 mr-1.5" />
      default: return <Clock className="w-4 h-4 mr-1.5" />
    }
  }

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Compliance <span className="text-primary">Calendar</span>
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Stay updated on crucial tax, GST, and ROC deadlines. Filter and track upcoming compliance events to avoid penalties.
            </p>
          </div>
          <Button>
            <Bell className="w-4 h-4 mr-2" />
            Get Reminders
          </Button>
        </div>

        <div className="bg-white dark:bg-slate-900 border rounded-2xl shadow-sm overflow-hidden">
          {/* Controls */}
          <div className="p-4 md:p-6 border-b flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search compliance (e.g., GST, TDS)" className="pl-9" />
            </div>
            <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                <Filter className="w-4 h-4 mr-2" /> All
              </Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap">GST</Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap">Income Tax</Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap">ROC</Button>
            </div>
          </div>

          {/* List */}
          <div className="divide-y">
            {mockDeadlines.map((deadline) => (
              <div key={deadline.id} className="p-4 md:p-6 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 md:w-1/2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-primary/10 text-primary">
                      {deadline.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{deadline.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Building2 className="w-4 h-4 mr-1.5 inline" /> 
                    Applicable to: {deadline.applicableTo}
                  </p>
                </div>
                
                <div className="flex flex-col md:items-end gap-2">
                  <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border ${getStatusColor(deadline.status)}`}>
                    {getStatusIcon(deadline.status)}
                    {deadline.status}
                  </div>
                  <div className="flex items-center text-sm font-medium mt-1">
                    <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                    {deadline.dueDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {mockDeadlines.length === 0 && (
            <div className="p-12 text-center text-muted-foreground">
              <Calendar className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No upcoming compliance deadlines found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
