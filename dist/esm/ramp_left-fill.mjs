export const name="ramp_left-fill";
export const id="dl_3909ec787d6f398cb3b9";
export const url=new URL("../icons/ramp_left-fill.svg?v=7cf4a4b035d109f590438f6c18ca8a74b5895379ce6f497fbab5779675eefd22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
