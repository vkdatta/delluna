export const name="broadcast-fill";
export const id="dl_8cd0d562313647cda48d";
export const url=new URL("../icons/broadcast-fill.svg?v=21c6b1e186552ca40d12adace0a11de490fa0759973b786c03451521175a9c10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
