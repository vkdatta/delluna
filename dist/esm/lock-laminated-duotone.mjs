export const name="lock-laminated-duotone";
export const id="dl_0f470f012b524238addb";
export const url=new URL("../icons/lock-laminated-duotone.svg?v=816816d15c38e27075fd7b69761c65c257e559e80747765820356854f022bb63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
