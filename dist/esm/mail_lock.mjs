export const name="mail_lock";
export const id="dl_8c3afc731beb8380dde4";
export const url=new URL("../icons/mail_lock.svg?v=e598b2551c117dc02a702af5d94616cf3f5e68d35ff21eeedbf8fd02221325b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
