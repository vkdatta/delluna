export const name="dirty_lens";
export const id="dl_5da2ab9cbd6202f2ce3a";
export const url=new URL("../icons/dirty_lens.svg?v=16790cc7c679d5e7d07e7c52c9b276650923bef2c0ed2e6628e29a23a9c91c93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
