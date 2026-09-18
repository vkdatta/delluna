export const name="sync_alt-fill";
export const id="dl_b60d216bc05449e38a41";
export const url=new URL("../icons/sync_alt-fill.svg?v=fe143ca675ccf9637552deae019f73a1ecb3a0947c2550a3cef16d794ce5a9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
