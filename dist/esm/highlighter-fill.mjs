export const name="highlighter-fill";
export const id="dl_01a36db6e2c64e79a92a";
export const url=new URL("../icons/highlighter-fill.svg?v=347b2030a72997a14fda64d82ae92afec3ab4f78cd041e62bc12434e85e443b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
