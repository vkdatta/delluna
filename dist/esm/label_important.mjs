export const name="label_important";
export const id="dl_d370630bf1e25169f00c";
export const url=new URL("../icons/label_important.svg?v=30506b341819d5e362704f805f0a385f11eae1fe0de25364552ea5c574266fe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
