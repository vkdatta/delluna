export const name="wifi_calling_bar_1";
export const id="dl_9d8457c852fd41a889e0";
export const url=new URL("../icons/W/wifi_calling_bar_1.svg?v=de017c1e83cff7fe50676ffb05c34a3299c91674986cde44e7c2a47a2cfee6ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
