import os
import re
from pathlib import Path
from multiprocessing import Pool, cpu_count

def fix_svg(file):
    try:
        content = Path(file).read_text()
        if 'stroke-linecap' in content or 'stroke-width' in content:
            # Stroke-based
            content = re.sub(r'fill="[^"]*"', '', content)
            content = content.replace('<svg ', '<svg fill="none" stroke="currentColor" ')
        else:
            # Fill-based
            content = content.replace('stroke="currentColor"', '')
            content = content.replace('fill="none"', '')
            content = content.replace('<path ', '<path fill="currentColor" ')
        Path(file).write_text(content)
    except Exception as e:
        print(f"Error: {file} — {e}")

if __name__ == '__main__':
    files = list(Path('.').rglob('*.svg'))
    print(f"Processing {len(files)} files...")
    with Pool(cpu_count()) as pool:
        pool.map(fix_svg, files)
    print("Done!")