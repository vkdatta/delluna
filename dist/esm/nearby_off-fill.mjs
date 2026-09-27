export const name="nearby_off-fill";
export const id="dl_468371a024bddcae8b30";
export const url=new URL("../icons/nearby_off-fill.svg?v=106d7db84fc32eb5be60459b3f17bdeebd3756d9752054410d7529abe014d749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
