export const name="switch_access_2-fill";
export const id="dl_eac618521aecc23a52fc";
export const url=new URL("../icons/switch_access_2-fill.svg?v=b3695242dd3f6108631c7dc929d35b2ddf008e20b62c5a20f1a10e1b56c5adab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
