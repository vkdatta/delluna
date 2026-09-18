export const name="blender";
export const id="dl_c66dd3f52ada4a9fab27";
export const url=new URL("../icons/blender.svg?v=0b39dfbab2eddb44466564af20bb894bc7bc7d5d83ff91f4d60498afbdbe90e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
