export const name="partner_exchange-fill";
export const id="dl_f10fdac397b3cb15c364";
export const url=new URL("../icons/partner_exchange-fill.svg?v=fd8ad0176e90bcf31a429560fa6ada18cf540d1b87af8218593a7f73cc646724",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
