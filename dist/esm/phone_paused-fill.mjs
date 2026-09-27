export const name="phone_paused-fill";
export const id="dl_265e1c0343bfd33ec047";
export const url=new URL("../icons/phone_paused-fill.svg?v=615c1e21af0fb0a3fb64a9a17754d8e4b65ee22ab15974f3146739598afda258",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
