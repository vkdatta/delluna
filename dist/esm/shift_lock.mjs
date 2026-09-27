export const name="shift_lock";
export const id="dl_1ef8776cb3321c828675";
export const url=new URL("../icons/shift_lock.svg?v=f6e946be3a8e021ffc4dd46bd158612b9218ccac268b00cdb516075b1b9084a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
