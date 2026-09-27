export const name="lucid_1-building";
export const id="dl_fea373519e484f0ca496";
export const url=new URL("../icons/lucid_1-building.svg?v=60bfdede34b8cc9451cdc3c2acbc2afe4f8ddd559f7dc9d252840a19e48a7355",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
