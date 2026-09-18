export const name="japanese_flag";
export const id="dl_114f83879d2c41ce8b14";
export const url=new URL("../icons/japanese_flag.svg?v=13292de59923f34a7d5f395c890f11f9254c7698f34c0ff2e3d0bd58ec77a374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
