import os
import re

def centralize_nav():
    root_dir = r"c:\Users\Admin\Downloads\Horizon"
    
    # Files to process
    files_to_process = [
        "australia.html",
        "contact.html",
        "destinations.html",
        "newzealand.html",
        "partner-register.html",
        "reviews.html",
        "services.html",
        "destinations/template.html"
    ]
    
    # Add all generated city pages
    australia_cities = ["cairns.html", "brisbane.html", "gold-coast.html", "whitsundays.html", "sydney.html", "melbourne.html", "tasmania.html"]
    nz_cities = ["rotorua.html", "auckland.html", "christchurch.html"]
    
    for city in australia_cities:
        files_to_process.append(os.path.join("destinations", "australia", city))
    for city in nz_cities:
        files_to_process.append(os.path.join("destinations", "new-zealand", city))

    for rel_file_path in files_to_process:
        file_path = os.path.join(root_dir, rel_file_path)
        if not os.path.exists(file_path):
            print(f"Skipping {file_path}, does not exist.")
            continue
            
        # Calculate relative prefix to root
        norm_path = rel_file_path.replace("\\", "/")
        depth = norm_path.count('/')
        rel_prefix = "../" * depth
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Determine if it should be scrolled by default
        # Index is the only one that starts transparent
        is_scrolled = "true" 
        
        # 1. Remove the nav block
        # We look for the comment or the nav tag
        content = re.sub(r'<!-- Navigation -->\s*<nav.*?</nav>', '', content, flags=re.DOTALL)
        content = re.sub(r'<nav class="navbar.*?</nav>', '', content, flags=re.DOTALL)
        
        # 2. Inject the dynamic navbar after <body>
        nav_injection = f'''
    <div id="navbar-placeholder"></div>
    <script src="{rel_prefix}assets/js/navbar-init.js"></script>
    <script src="{rel_prefix}assets/js/translations.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {{
            initNavbar('{rel_prefix}', {is_scrolled});
        }});
    </script>'''
        
        # Avoid duplicate injections
        if 'initNavbar' not in content:
            content = content.replace('<body>', '<body>' + nav_injection)
        
        # 3. Remove redundant translations.js at bottom if present
        # This is a bit tricky with different relative paths, so we use a regex
        content = re.sub(r'<script src=".*?assets/js/translations.js"></script>', '', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Processed {rel_file_path}")

if __name__ == "__main__":
    centralize_nav()
