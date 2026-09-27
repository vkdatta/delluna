export const name="work_alert-fill";
export const id="dl_642b963ac3384596c82c";
export const url=new URL("../icons/work_alert-fill.svg?v=b2870bd919fe261c95cdb25299999be982284838aeb93280fadc3e748576d8a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
