export const name="3d_rotation";
export const id="dl_adc5b9a65fe544659f0b";
export const url=new URL("../icons/3/3d_rotation.svg?v=79827877d255a74c168869a08f97436f57ddd7164e2af28648beae540a79a56e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
