export const name="fire_hydrant-fill";
export const id="dl_b1f0b2f07aee3e8e0b84";
export const url=new URL("../icons/fire_hydrant-fill.svg?v=d7de2b6740b191652943c1dabe4fc46e376c2271f0415f5550771edcb38e3bad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
