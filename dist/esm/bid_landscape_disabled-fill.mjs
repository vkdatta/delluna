export const name="bid_landscape_disabled-fill";
export const id="dl_95b258c5a23d45bd8bae";
export const url=new URL("../icons/bid_landscape_disabled-fill.svg?v=48b6f2674006f8bd33aeef0ef65ccde374288fc687e6b29428408411a8393b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
