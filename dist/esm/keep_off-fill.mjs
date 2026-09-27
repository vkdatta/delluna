export const name="keep_off-fill";
export const id="dl_29c5f20df95963cd0f76";
export const url=new URL("../icons/keep_off-fill.svg?v=5b6926a8d0f7d22424c2e804ef025b5eaa7820814ac1232976a558247d4961f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
