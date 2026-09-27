export const name="lucid_3-skull";
export const id="dl_c7618281f61546298043";
export const url=new URL("../icons/lucid_3-skull.svg?v=ecd85854ea4dd9df42fe6cd2d831d3c120781588333151a68dc59d3997fbeb51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
