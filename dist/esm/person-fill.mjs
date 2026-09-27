export const name="person-fill";
export const id="dl_30494c3b92035591215a";
export const url=new URL("../icons/person-fill.svg?v=f0d24907a18ec25ec58115a929f8b0f8f8da60d75973befb0512384a0d3d820b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
