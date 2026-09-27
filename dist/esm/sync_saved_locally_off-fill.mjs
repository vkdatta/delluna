export const name="sync_saved_locally_off-fill";
export const id="dl_c244a87f63d2e5420998";
export const url=new URL("../icons/sync_saved_locally_off-fill.svg?v=69d40b7d125eda8a825162def45046519977106003d157edd2cc6b7c229f5f2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
