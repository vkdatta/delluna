export const name="water_damage";
export const id="dl_3403aa400fef20030fe8";
export const url=new URL("../icons/water_damage.svg?v=3c9abbcf7b12268833c3a71574c4c90ea82a44fc7444d3f764a642b414dbaf47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
