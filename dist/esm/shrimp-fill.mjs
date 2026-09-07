export const name="shrimp-fill";
export const id="dl_99808966addb45f9b392";
export const url=new URL("../icons/S/shrimp-fill.svg?v=8e03a72c5e581ace0c0f9a46d53a6d3f675f94aef49eb67612aa786933e2c03d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
