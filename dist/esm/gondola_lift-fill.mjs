export const name="gondola_lift-fill";
export const id="dl_3e2653525bbdc93daa4c";
export const url=new URL("../icons/gondola_lift-fill.svg?v=7948f61e28f7e537b1744a20688824f4544d043022cd9b1d234561356aa4514d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
