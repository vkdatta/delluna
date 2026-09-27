export const name="lucid_3-moon";
export const id="dl_ce6f4f2ede144bd9a5d0";
export const url=new URL("../icons/lucid_3-moon.svg?v=c48aac014180a83b501b9a4ec914815f4992582ca6ab9be083d3523c2fad72ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
