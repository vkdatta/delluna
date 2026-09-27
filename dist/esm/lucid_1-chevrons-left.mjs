export const name="lucid_1-chevrons-left";
export const id="dl_bb40b34ea33544219b02";
export const url=new URL("../icons/lucid_1-chevrons-left.svg?v=6f1cd9225c9ec31a86aacddb248d906d9105ad23e3f8a86a020f72b9189db69d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
