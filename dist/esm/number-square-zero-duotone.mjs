export const name="number-square-zero-duotone";
export const id="dl_fa7397f26b2a403eb74d";
export const url=new URL("../icons/number-square-zero-duotone.svg?v=e13673c3d20eee6dbd806b7d1e833b1d05a6cc4ee20552865f0f1cfaef12322c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
