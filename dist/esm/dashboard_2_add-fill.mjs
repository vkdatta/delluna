export const name="dashboard_2_add-fill";
export const id="dl_3355711f57b5f5453cdc";
export const url=new URL("../icons/dashboard_2_add-fill.svg?v=08cb29443ef97254b86d4e17f949b0f935d38b718e0097d90e5f29cff566ffaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
