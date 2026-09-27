export const name="airplane_ticket";
export const id="dl_f9342a653ef868cf4afe";
export const url=new URL("../icons/airplane_ticket.svg?v=cd617f5d2ba1c76192c5505a7b0e9b09e7a3695414c483ccae0df9e07fcdd8d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
