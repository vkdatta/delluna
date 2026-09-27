export const name="east-fill";
export const id="dl_aca591883d5853f46b3b";
export const url=new URL("../icons/east-fill.svg?v=6fc98f64f97b1246e9ae09ab4b5941e59ffff6a31059c3d6924cfea7e1172614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
