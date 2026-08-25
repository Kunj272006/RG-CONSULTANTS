import os

def update_file(filepath):
    if not os.path.exists(filepath): return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('rachitgardca1992@gmail.com', 'rachitgargca1992@gmail.com')
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('src/components/layout/Footer.tsx')
update_file('src/app/contact/page.tsx')
