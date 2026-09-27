export const name="magnifying-glass-plus-duotone";
export const id="dl_2a2944e5366046758bc3";
export const url=new URL("../icons/magnifying-glass-plus-duotone.svg?v=5b014d6199d6a0d5acc9483e5212f34841c4bad0abeb5743aec3295f5b664640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
