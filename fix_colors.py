import os
import re

css_path = 'src/app/globals.css'
if not os.path.exists(css_path): exit()

with open(css_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace light mode variables
reps_light = {
    '--background:': '--background: #F7F4ED;',
    '--foreground:': '--foreground: #526273;',
    '--primary:': '--primary: #0B1F33;',
    '--accent:': '--accent: #C6A15B;',
    '--card:': '--card: #FFFFFF;',
}
# Replace dark mode variables (just set to their secondary dark where applicable)
reps_dark = {
    '--background:': '--background: #102D46;',
    '--foreground:': '--foreground: #F7F4ED;',
    '--primary:': '--primary: #C6A15B;',
    '--accent:': '--accent: #0B1F33;',
    '--card:': '--card: #0B1F33;',
}

def update_block(block, reps):
    for key, val in reps.items():
        block = re.sub(rf'{key}.*?;', val, block)
    return block

# Split root and dark
root_match = re.search(r'(:root\s*\{)(.*?)(\})', content, re.DOTALL)
if root_match:
    updated_root = update_block(root_match.group(2), reps_light)
    content = content[:root_match.start(2)] + updated_root + content[root_match.end(2):]

dark_match = re.search(r'(\.dark\s*\{)(.*?)(\})', content, re.DOTALL)
if dark_match:
    updated_dark = update_block(dark_match.group(2), reps_dark)
    content = content[:dark_match.start(2)] + updated_dark + content[dark_match.end(2):]

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(content)

