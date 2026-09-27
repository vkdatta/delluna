export const name="group_off";
export const id="dl_9e097579195f0ed33cb2";
export const url=new URL("../icons/group_off.svg?v=5cbad0f0290590f546505cb1145f1b5cd7d6ddbd1c082b29bdb38677f0d1e933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
