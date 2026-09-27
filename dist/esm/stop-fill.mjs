export const name="stop-fill";
export const id="dl_681f345bac4d43fa21b0";
export const url=new URL("../icons/stop-fill.svg?v=f706b55887d65f115fc40220b63cbfa0978c8c8ac72917ec57e7e5bdadfd940a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
