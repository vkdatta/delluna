export const name="conversation-fill";
export const id="dl_fa26c8562dabb31f0d9d";
export const url=new URL("../icons/conversation-fill.svg?v=d273f92013aeecfbd18c02980050f6c8808a676f1e2d3a6eda0726aa6f6f5662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
