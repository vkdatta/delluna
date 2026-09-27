export const name="ruler-bold";
export const id="dl_39faf8bd42dc442fb3da";
export const url=new URL("../icons/ruler-bold.svg?v=59df0abe6911b7234e61e0e423e3b8511bcd0f376bc74eebc5759ec5da152637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
