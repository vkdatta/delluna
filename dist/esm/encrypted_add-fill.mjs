export const name="encrypted_add-fill";
export const id="dl_72d615b9a26385c7f049";
export const url=new URL("../icons/encrypted_add-fill.svg?v=b761ef2d90902f5e0cbd2522da94cb7599389de1faea7923f32304b240f5da9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
