export const name="high-definition-fill";
export const id="dl_628c0f43bda848d7bd52";
export const url=new URL("../icons/high-definition-fill.svg?v=e7bcef586274d55c1b640b28b0eab09e5c9b2190ed5e732b2c6d427a74fc29e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
