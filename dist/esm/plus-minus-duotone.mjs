export const name="plus-minus-duotone";
export const id="dl_b7d13fef4c904da2a7b6";
export const url=new URL("../icons/plus-minus-duotone.svg?v=10d1a1fe7c422d59fb0f16444344e45336083e206f607b52a10bdbe1d594cc1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
