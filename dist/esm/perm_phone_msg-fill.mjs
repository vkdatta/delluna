export const name="perm_phone_msg-fill";
export const id="dl_f10eaa15f0ac9fe91491";
export const url=new URL("../icons/perm_phone_msg-fill.svg?v=744bdaa7a4eb6d4c48a19e703197dffb06dcdb038e2ad6b797eeeeb34f2674e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
