import os

gallery = '''
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
'''

def inject_gallery(filepath):
    if not os.path.exists(filepath): return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'Our Workspace' in content: return
    # Find the last </div> before ) }
    idx = content.rfind('    </div>')
    if idx != -1:
        new_content = content[:idx] + gallery + content[idx:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

inject_gallery('src/app/about/page.tsx')
inject_gallery('src/app/careers/page.tsx')
