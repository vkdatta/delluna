export const name="dog-duotone";
export const id="dl_f5f4fb11dd1f418e87fe";
export const url=new URL("../icons/dog-duotone.svg?v=ad77b2ba09301e06b82a3ad07e1e22101671cf2f3ec6c8ff9f1c2c1fea95e2d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
