export const name="ad_group";
export const id="dl_3896934e4cb54ee39e20";
export const url=new URL("../icons/ad_group.svg?v=3d4afe19a78474f4a0ce2b3596743799e0b25299193b03b2a157892119dcb78f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
