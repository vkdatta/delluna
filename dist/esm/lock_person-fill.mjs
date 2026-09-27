export const name="lock_person-fill";
export const id="dl_90e642ed05f81b5eb87a";
export const url=new URL("../icons/lock_person-fill.svg?v=e3593a67fab5ecbb3d20a39428c4a70e664b28e24d4031fc19b785b683caf554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
