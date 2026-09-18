export const name="radiology-fill";
export const id="dl_6f47e058fd7a4ce18a67";
export const url=new URL("../icons/radiology-fill.svg?v=b0a719c9f3e7be494dda3ded55d0d05a0ede232ae25529a3621d9917ae201ecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
