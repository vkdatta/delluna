export const name="splitscreen";
export const id="dl_dd5a39e07be359505c8f";
export const url=new URL("../icons/splitscreen.svg?v=a5590ab097b01fd9eeec494f0bd387326253592946045146067b9284ae547c10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
