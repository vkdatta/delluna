export const name="key_vertical-fill";
export const id="dl_6286a2f80af840fba49a";
export const url=new URL("../icons/key_vertical-fill.svg?v=19519a77300157eb6ce8a52de1e2957906ce3dbcae45602ad3d401e17f5ab0bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
