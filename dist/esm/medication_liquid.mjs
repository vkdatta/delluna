export const name="medication_liquid";
export const id="dl_92ac2d9b938f19a27111";
export const url=new URL("../icons/medication_liquid.svg?v=cd82b988f0460c2b6738e1a67b319bca831e37e0286930f76d681cd3591d444e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
