export const name="type_specimen-fill";
export const id="dl_8781c3d28bc94748a2f9";
export const url=new URL("../icons/type_specimen-fill.svg?v=2bc8323096e27fda9ceb018ab2e5ff3ce2afac4c064a2733086d6e62bb5c4326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
