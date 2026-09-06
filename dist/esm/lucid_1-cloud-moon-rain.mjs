export const name="lucid_1-cloud-moon-rain";
export const id="dl_5d08286f5428450186aa";
export const url=new URL("../icons/lucid_1-cloud-moon-rain.svg?v=dbd8c3f3d48a123728bfce46d9861b22fede1973b68c472d8f9b18312ca7e627",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
