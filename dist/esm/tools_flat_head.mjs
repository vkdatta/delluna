export const name="tools_flat_head";
export const id="dl_395a36d100f8c64b1318";
export const url=new URL("../icons/tools_flat_head.svg?v=af3c26c625046dce4db454f0264649e16be76a81d5f22d7c2c481741cd1a234f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
