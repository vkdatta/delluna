export const name="champagne";
export const id="dl_b09c4607c6664780b5d1";
export const url=new URL("../icons/champagne.svg?v=d3beaf17ad3136cff71b7f635daa0e289f94677302e3f32db91470fb9076d963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
