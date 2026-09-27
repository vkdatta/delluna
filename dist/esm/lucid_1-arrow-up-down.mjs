export const name="lucid_1-arrow-up-down";
export const id="dl_8ee503819d104e9e8572";
export const url=new URL("../icons/lucid_1-arrow-up-down.svg?v=441024998e36262547707106c2d5e0989a332e72de33683a5becccb804d4b484",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
