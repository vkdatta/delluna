export const name="hdr_auto-fill";
export const id="dl_bdb90f287e5242e6a805";
export const url=new URL("../icons/H/hdr_auto-fill.svg?v=36ae9e311b26b4439997c83b2c62e69e036e8fd48221e44767be93899280b94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
