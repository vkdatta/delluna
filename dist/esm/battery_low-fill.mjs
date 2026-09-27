export const name="battery_low-fill";
export const id="dl_1f94f5e58d0450b962a2";
export const url=new URL("../icons/battery_low-fill.svg?v=8d5a36f6886c8457cedd375c1414742bef6f2a97bd2a6a40a8e023cd965a6bc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
