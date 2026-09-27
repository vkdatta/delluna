export const name="vaccines-fill";
export const id="dl_904dd6044fa1293d108e";
export const url=new URL("../icons/vaccines-fill.svg?v=aa376d10e5657f6fda58497d149179140b0f634d92694140f8fd40b14e1be1d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
