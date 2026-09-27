export const name="currency-circle-dollar";
export const id="dl_fe5c010baf6e4a0c90ec";
export const url=new URL("../icons/currency-circle-dollar.svg?v=0e04ecee72f5ceef7c63d62140ba54c6aa421ba31797498bc3b27063fabb1913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
