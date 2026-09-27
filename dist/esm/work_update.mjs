export const name="work_update";
export const id="dl_6de194f34567f2f96f2d";
export const url=new URL("../icons/work_update.svg?v=6502e768d480e7cea3a2856895a10d9107b2bdc1ab395f09515963ccf1818fc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
