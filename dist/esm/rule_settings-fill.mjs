export const name="rule_settings-fill";
export const id="dl_c80c8c03b4bd4c98b600";
export const url=new URL("../icons/rule_settings-fill.svg?v=fc40ec6e368f662609a233fc48222a2a8ff69529851718b1d911544dda750472",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
