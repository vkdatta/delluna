export const name="family_restroom-fill";
export const id="dl_9b56b5e227607e0cb72f";
export const url=new URL("../icons/family_restroom-fill.svg?v=5eb76e996bd76d47befe3f6488f1b1df11dbe7e0aaf5335cced05a321cb2093d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
