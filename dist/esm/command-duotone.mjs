export const name="command-duotone";
export const id="dl_5684c09964d2432291da";
export const url=new URL("../icons/command-duotone.svg?v=06b45d74f9ad9fa76f8d859ce7de762d01613676517cfaad251e5c01af8dee05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
