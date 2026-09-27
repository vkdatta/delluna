export const name="lucid_3-scale-3d";
export const id="dl_d771941261444a67a862";
export const url=new URL("../icons/lucid_3-scale-3d.svg?v=222124eab5daf6c5362329a23685b14f9beaf2ffc8bf4364c5707c23f61c4729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
