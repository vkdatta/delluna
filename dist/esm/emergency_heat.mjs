export const name="emergency_heat";
export const id="dl_63ae70f6253fbc4b49a8";
export const url=new URL("../icons/emergency_heat.svg?v=c5c8115665d800b48ce4462e55c3e761c00cb2b6b8c97d422ee4a34c5b19f5f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
