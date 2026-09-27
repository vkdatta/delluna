export const name="pi-duotone";
export const id="dl_d5545ae2ca0948df92f7";
export const url=new URL("../icons/pi-duotone.svg?v=664c2c482ff2c03f1858ebd818b8cdbea38cb37a02d030e633dfd473a957dcff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
