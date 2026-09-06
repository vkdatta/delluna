export const name="ticket";
export const id="dl_b0d891950555494989d4";
export const url=new URL("../icons/ticket.svg?v=fe35d98f24fe4ed01184f4d0e773389910f3265186f40985aca0a5657275d706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
