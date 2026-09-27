export const name="fire-truck-duotone";
export const id="dl_cb490ee8933641c5850f";
export const url=new URL("../icons/fire-truck-duotone.svg?v=6c57684274a504ff09cd9cf05ac0358ab82149e5af26f1c52fab20e559b85c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
