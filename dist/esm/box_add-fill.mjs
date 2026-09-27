export const name="box_add-fill";
export const id="dl_f372447bd579f94bb1a7";
export const url=new URL("../icons/box_add-fill.svg?v=70dd90cc1600639b03a8e2dc6679ed8721ecaaca99fb80e39269168eac997eec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
