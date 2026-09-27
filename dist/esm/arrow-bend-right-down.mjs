export const name="arrow-bend-right-down";
export const id="dl_5f491656cedf4fe5ae22";
export const url=new URL("../icons/arrow-bend-right-down.svg?v=4b321b958041a5a109943909a6de822d2194ff125799cc0a057c9978cc1aeab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
