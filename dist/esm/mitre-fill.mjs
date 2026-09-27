export const name="mitre-fill";
export const id="dl_2105f5ff7bfc51f0cc56";
export const url=new URL("../icons/mitre-fill.svg?v=92d4d1ec055c5a10d26ab07ef4305714ed8676515915641eb90dc1c2553f2b9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
