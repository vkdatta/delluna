export const name="steering_wheel_heat-fill";
export const id="dl_76dce461e44b32fa5d5f";
export const url=new URL("../icons/steering_wheel_heat-fill.svg?v=46bba8a0486bffef6c48f6df7e04c47b6bc64eef89e78bcd360d215b28720a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
