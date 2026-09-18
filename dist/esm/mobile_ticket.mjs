export const name="mobile_ticket";
export const id="dl_3d0062de6e654b55be47";
export const url=new URL("../icons/M/mobile_ticket.svg?v=5841401bf7d046f36843b8483a0692f0c45e28ca3c1d40e503287125b00cd4aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
