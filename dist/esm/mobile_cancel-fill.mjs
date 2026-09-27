export const name="mobile_cancel-fill";
export const id="dl_0570039b79304f17e0ab";
export const url=new URL("../icons/mobile_cancel-fill.svg?v=1d284c97f0c10cdb7d6bb4cc4ae404aeed34fee7967a2013cfcce83e0fede71d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
