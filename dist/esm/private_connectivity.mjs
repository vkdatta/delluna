export const name="private_connectivity";
export const id="dl_3dda46a6e49ded8e56d5";
export const url=new URL("../icons/private_connectivity.svg?v=0ed097a13f07e2a5d7233c0628be6ae938b2633cc1fb0788eecc01f28ea4fcb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
