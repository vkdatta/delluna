export const name="lucid_1-cloud-off";
export const id="dl_b30b41120fe848129d36";
export const url=new URL("../icons/lucid_1-cloud-off.svg?v=de7e8046a8e700b913010cb232d6d83a103ad0b95d187786525859375ec866cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
