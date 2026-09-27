export const name="dishwasher_gen-fill";
export const id="dl_b0296072dfd49dd1e1e7";
export const url=new URL("../icons/dishwasher_gen-fill.svg?v=b0001095c973d1d9a14d8ce36cdd77891a7cb2182eedc3ec1536ede6d51ee145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
