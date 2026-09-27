export const name="present_to_all-fill";
export const id="dl_412b7f2d00ab837e7290";
export const url=new URL("../icons/present_to_all-fill.svg?v=fa167d04697a1187e3dd84dc24a45f984a76c436a82456eb1615b2a33944161c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
