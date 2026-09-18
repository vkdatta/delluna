export const name="perm_contact_calendar-fill";
export const id="dl_8ac2faac4e724e639004";
export const url=new URL("../icons/perm_contact_calendar-fill.svg?v=a5985bc7f545cec3611092821021da78c6b3b12c011cc85f6d3c873470a0ad2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
