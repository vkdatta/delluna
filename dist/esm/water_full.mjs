export const name="water_full";
export const id="dl_e66012c9ae61414e053d";
export const url=new URL("../icons/water_full.svg?v=0615971841cc6a282d1a8823dd9e79aa3f6a270deab8e4dca15813cd7333fde7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
