export const name="battery_status_good";
export const id="dl_e8b975761ca94b01c1ed";
export const url=new URL("../icons/battery_status_good.svg?v=59a09af2d6fcb2994a53c0baa5e0306deaff24199bcc698293ae6eda5c25001a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
