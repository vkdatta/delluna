export const name="network_intelligence";
export const id="dl_eca5c39a64a769a35415";
export const url=new URL("../icons/network_intelligence.svg?v=92db50fdb09fc8f5633673fe464ca423c759cb1b6795e3cfd519e972fe9a68ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
