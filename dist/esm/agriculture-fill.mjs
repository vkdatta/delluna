export const name="agriculture-fill";
export const id="dl_51fb5cf21a644047be65";
export const url=new URL("../icons/agriculture-fill.svg?v=3483b8ca2c127866bb36fedb4bd7e290503f724dcb10f15e3778ff03053601bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
