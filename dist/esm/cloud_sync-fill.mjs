export const name="cloud_sync-fill";
export const id="dl_c82a5be5445169ae7eae";
export const url=new URL("../icons/cloud_sync-fill.svg?v=68ce8ad46ae045b74f5d59102f80a0f3988ecaec1ecce513efe3207bd91dfaef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
