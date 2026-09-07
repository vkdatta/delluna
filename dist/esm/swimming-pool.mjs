export const name="swimming-pool";
export const id="dl_ad4277b1ecac4ff99870";
export const url=new URL("../icons/S/swimming-pool.svg?v=2f0766fa60f1cba793e8f569d21ecb850183ba88a5ee9a2407dc190f9f32a3cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
