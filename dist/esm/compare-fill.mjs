export const name="compare-fill";
export const id="dl_a032d95e2c140241a7a7";
export const url=new URL("../icons/compare-fill.svg?v=a343ee66344b611677a82f9e88a8ecc326442a9efffcdb57fc6516b6a971c55e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
