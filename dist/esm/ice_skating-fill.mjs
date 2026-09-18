export const name="ice_skating-fill";
export const id="dl_bb4f623f1f7344b19e72";
export const url=new URL("../icons/ice_skating-fill.svg?v=8d4cf9ccb038648abbad7dbd36d40b89f8e8667050cad7d386c86fb24e28823b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
