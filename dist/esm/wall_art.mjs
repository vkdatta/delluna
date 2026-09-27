export const name="wall_art";
export const id="dl_e9c78ab4ef5e53667b3f";
export const url=new URL("../icons/wall_art.svg?v=d583dc8e10a64c14f3f3f5338756a1537a321aabbe73c49afabe35fef084d484",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
