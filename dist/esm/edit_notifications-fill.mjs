export const name="edit_notifications-fill";
export const id="dl_5f6cd0914763c4fff96d";
export const url=new URL("../icons/edit_notifications-fill.svg?v=7cabcb09780571f9176891978136b246a100aaf91e42a5baedb452b9e9a3ba8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
