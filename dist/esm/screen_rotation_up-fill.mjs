export const name="screen_rotation_up-fill";
export const id="dl_481c086907e2ece25d1f";
export const url=new URL("../icons/screen_rotation_up-fill.svg?v=ce26a710b0c46fb27e58dd0c625852195c49461272f79aa2ae6a5005e56b1f2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
