export const name="knife";
export const id="dl_3af3e02149094ffa85af";
export const url=new URL("../icons/knife.svg?v=4475ebd92ee311c9d5ab40dc543c4e106c4eef2ecbd861e77149901d4e84f6b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
