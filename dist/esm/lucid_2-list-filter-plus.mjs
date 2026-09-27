export const name="lucid_2-list-filter-plus";
export const id="dl_e080cbea710741eb90cc";
export const url=new URL("../icons/lucid_2-list-filter-plus.svg?v=d2f011019f61256ad3086f3ef655e2949a190ecd38e3bf1d79241d60983ec9a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
