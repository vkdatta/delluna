export const name="outgoing_mail-fill";
export const id="dl_7ab167f746b327c61638";
export const url=new URL("../icons/outgoing_mail-fill.svg?v=6f09d6289f33cd654f368b974e16aaf6d650d197e9854211e380a653e87fe638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
