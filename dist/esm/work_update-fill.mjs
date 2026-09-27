export const name="work_update-fill";
export const id="dl_dae8cf967ffb5cbff8db";
export const url=new URL("../icons/work_update-fill.svg?v=56742446e87d903e7b0f162dc4871dec7b4c3680c1f5f9d30bc8ab4c0c45ab98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
