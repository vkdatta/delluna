export const name="sidebar-light";
export const id="dl_063bb448a743d767dc1f";
export const url=new URL("../icons/sidebar-light.svg?v=faad5995d8a141a7b3aab74bc8ab3ec21469a21b5737c702717649a59a94a0de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
