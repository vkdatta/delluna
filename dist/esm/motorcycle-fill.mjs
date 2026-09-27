export const name="motorcycle-fill";
export const id="dl_4455835b95db4e8db361";
export const url=new URL("../icons/motorcycle-fill.svg?v=c6ca4858c6f0de5a3cc435cc67e92e1c10f851dcae2c0f9a7b05544eb2f7d5f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
