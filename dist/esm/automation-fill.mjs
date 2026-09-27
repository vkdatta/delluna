export const name="automation-fill";
export const id="dl_d649e2ca6a35efc57321";
export const url=new URL("../icons/automation-fill.svg?v=c4be9513662d5b2e6a615354aa03ca8a5b9439e35cb40c39b5dc4f4486972549",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
