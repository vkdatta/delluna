export const name="doorbell-fill";
export const id="dl_4aec445f98ff8211b2e1";
export const url=new URL("../icons/doorbell-fill.svg?v=f1672556345cb30530575abc2b8d5a9bbc938985f6e1f55deaf2075e446507f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
