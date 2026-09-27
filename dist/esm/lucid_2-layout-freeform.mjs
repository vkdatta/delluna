export const name="lucid_2-layout-freeform";
export const id="dl_11374d3d59534e1ea77a";
export const url=new URL("../icons/lucid_2-layout-freeform.svg?v=3472e9c480ba778f634b9e8cf95d2a208cf97b82bec55a4010d68a518ee2c933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
