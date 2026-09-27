export const name="folder-simple-plus-duotone";
export const id="dl_ce9ac2779bea46a48e71";
export const url=new URL("../icons/folder-simple-plus-duotone.svg?v=c5558f2d521b98a67a27bc53a1ccb31717178cd4ae9d74841f33535f83280053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
