export const name="monitor_weight_loss";
export const id="dl_7e26632336b360f222a0";
export const url=new URL("../icons/monitor_weight_loss.svg?v=97d08931dbb22a27fb376f30a1e7ebd1e54a0603e227c7dcb95c7014930f0ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
