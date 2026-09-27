export const name="lucid_1-calendar-sync";
export const id="dl_b7b80099476c4505a0ee";
export const url=new URL("../icons/lucid_1-calendar-sync.svg?v=6010260a0d6ba6cf1b93c7234940886752df2bbfd979cf02163c11cf580e7b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
