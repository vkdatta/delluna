export const name="egg-crack";
export const id="dl_b066251711224370bcd6";
export const url=new URL("../icons/egg-crack.svg?v=7cc8dda801c25e108e7525f4ed390c40d6502b32d2d62e4b2ed00e23ea37cb42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
