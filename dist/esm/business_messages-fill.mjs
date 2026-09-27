export const name="business_messages-fill";
export const id="dl_f37374ff1a7fb33618f0";
export const url=new URL("../icons/business_messages-fill.svg?v=f2cb594cf27c292b2b333020baf13db612b48d5f963f76b78491789dd8ee923a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
