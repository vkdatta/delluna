export const name="lucid_3-moon";
export const id="dl_ce6f4f2ede144bd9a5d0";
export const url=new URL("../icons/lucid_3-moon.svg?v=9a8bbbc9a01a4ae0c48f680a2d8c732c8e4aeda2b5befe3a184a126c12f5451f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
