export const name="width_normal-fill";
export const id="dl_ece1ecef93d10897bb3c";
export const url=new URL("../icons/width_normal-fill.svg?v=06aead5ef9da296fa10809d9ce51a4ba799fa7334896aef432530fbb341cf049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
