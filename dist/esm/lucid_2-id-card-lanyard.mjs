export const name="lucid_2-id-card-lanyard";
export const id="dl_8375003532fc42489652";
export const url=new URL("../icons/lucid_2-id-card-lanyard.svg?v=979253eca8fd46a9a926ffe0b3af601d11fe5111d58b0542ae9eef39b30a9308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
