export const name="e_mobiledata_badge-fill";
export const id="dl_bda2aadf3e9813adfc53";
export const url=new URL("../icons/e_mobiledata_badge-fill.svg?v=f6922cc6abe2393347fc03175d2236c5e206a9410b7eb5447a695c69a57fdbfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
