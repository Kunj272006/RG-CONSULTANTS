import os

def update_file(filepath, replacements):
    if not os.path.exists(filepath): return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

footer_reps = {
    '123 Business Avenue, Financial District': '<a href="https://maps.app.goo.gl/vLKUXje7yHTtt7CH6" target="_blank" className="hover:text-primary transition-colors">A3, Green Building, Laxmi Enclave, Dehrakhas, Dehradun, Uttarakhand 248001</a>',
    'info@rgconsultants.com': 'rachitgardca1992@gmail.com',
    '+91 98765 43210': '8171223939'
}

contact_reps = {
    '123 Business Avenue, Financial District, New Delhi, 110001': '<a href="https://maps.app.goo.gl/vLKUXje7yHTtt7CH6" target="_blank" className="hover:text-primary transition-colors">A3, Green Building, Laxmi Enclave, Dehrakhas, Dehradun, Uttarakhand 248001</a>',
    '+91 98765 43210': '8171223939',
    'info@rgconsultants.com': 'rachitgardca1992@gmail.com',
    'Mon - Fri: 9:00 AM - 6:00 PM': 'Mon - Fri: 11 am - 7 pm <br/> Saturday: 11 am - 3 pm <br/> Sunday: Closed'
}

update_file('src/components/layout/Footer.tsx', footer_reps)
update_file('src/app/contact/page.tsx', contact_reps)
