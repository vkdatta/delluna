export const name="nearby_off-fill";
export const id="dl_0d2d5354a2e6402281fd";
export const url=new URL("../icons/N/nearby_off-fill.svg?v=5c841aafa9f8f54e697423c5c007b353da97fd1695f17f163e49a0a9eab35fb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
