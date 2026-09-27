export const name="add_ad";
export const id="dl_9dbe936b80fa7417800c";
export const url=new URL("../icons/add_ad.svg?v=251e00defef69d5dc32d6d8b692c59f9733275d8564a6c2b6d963f4226102fe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
