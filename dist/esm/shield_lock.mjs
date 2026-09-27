export const name="shield_lock";
export const id="dl_bb95edea1343a8d71526";
export const url=new URL("../icons/shield_lock.svg?v=648540c183e543792e838e90a1b048a0c1d30ec27f05befc86acf6e17eeffd2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
