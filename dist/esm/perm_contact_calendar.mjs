export const name="perm_contact_calendar";
export const id="dl_da4ede50c79145728fb7";
export const url=new URL("../icons/perm_contact_calendar.svg?v=56ca65566d2bd1324c3eccbb541c8da844f89ea27778ef02b0afe73dc75e650b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
