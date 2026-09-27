export const name="timer_off-fill";
export const id="dl_e50fbb49d6d77d36f496";
export const url=new URL("../icons/timer_off-fill.svg?v=84f8ce3c0e16159bc5e3c8260d770fe83070aa7752b2c5bd051d7b6d33fc0604",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
