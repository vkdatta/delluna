export const name="mail_lock";
export const id="dl_bc5d555dad9a4d6d9f4d";
export const url=new URL("../icons/mail_lock.svg?v=39d9904d315b39ad008f4eb571337ed14c4a925bc215af551059d4d14519ca55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
