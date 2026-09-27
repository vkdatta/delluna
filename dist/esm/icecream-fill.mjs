export const name="icecream-fill";
export const id="dl_b1a056147a926eb5631a";
export const url=new URL("../icons/icecream-fill.svg?v=001b2cf7802129218d0d19261633e2d40f8845d033d5e5d2803da16f4b09bdb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
