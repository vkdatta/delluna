export const name="notifications_off";
export const id="dl_dc011aacdc2f5a4e2e2f";
export const url=new URL("../icons/notifications_off.svg?v=4a4d010fad230caa5de8a644ccebfdaff75260d4f8ef7557bbd475ce49270823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
