export const name="mobile_ticket-fill";
export const id="dl_c6ec42a9642420cf0f7a";
export const url=new URL("../icons/mobile_ticket-fill.svg?v=20106d7b01565a00dc25b3b028af7a2a666991f68471713da49f505c2b6651dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
