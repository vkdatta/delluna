export const name="threat_intelligence";
export const id="dl_b5ce057b683b2435b48b";
export const url=new URL("../icons/threat_intelligence.svg?v=abf3974c804f9fb005a5aa03fe7de38151b78fb188d2960b25aa9eaefb0520a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
