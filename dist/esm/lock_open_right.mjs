export const name="lock_open_right";
export const id="dl_8437b2c12aec92911132";
export const url=new URL("../icons/lock_open_right.svg?v=a177b025ef99da03196a3984813e7109bd4ae38e58d4eb7286f18758d1236ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
