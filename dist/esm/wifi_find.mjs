export const name="wifi_find";
export const id="dl_fbe27e6c3f1223968cd6";
export const url=new URL("../icons/wifi_find.svg?v=cb147a0f327a76048d2df50db9b7906ac9d519ce5ddaa73d0f711239403e1c28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
