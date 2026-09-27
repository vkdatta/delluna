export const name="perm_contact_calendar-fill";
export const id="dl_08491e6793ac3778c2c5";
export const url=new URL("../icons/perm_contact_calendar-fill.svg?v=6a0b095f5820de1a6f7cb3870f053e68402c68b2d644fb75448ba256623d57e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
