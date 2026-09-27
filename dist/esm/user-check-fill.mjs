export const name="user-check-fill";
export const id="dl_5f19b6695015279d748c";
export const url=new URL("../icons/user-check-fill.svg?v=63f0ab70eb406936e366ee538844a85eef7f2d352ffa3a1761e43ec5519b46cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
