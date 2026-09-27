export const name="add_business-fill";
export const id="dl_9c1b5966b118a923bcda";
export const url=new URL("../icons/add_business-fill.svg?v=2de33f2c49b35c5004afd3b784dfbb2b02dc5308ac72d42d964bab8c912dba13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
