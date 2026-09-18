export const name="sync_saved_locally-fill";
export const id="dl_5d72ec62ab424bf1bafc";
export const url=new URL("../icons/sync_saved_locally-fill.svg?v=16a138a69fd03ee93b6f9a2b6acdad712830721fe8ce9cd65f43df06a410d1f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
