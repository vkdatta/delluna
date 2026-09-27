export const name="lucid_2-list-filter-plus";
export const id="dl_e080cbea710741eb90cc";
export const url=new URL("../icons/lucid_2-list-filter-plus.svg?v=52cb745b292fafd9fd7f6c07fb81ef340b6e4a91dda4e69c2a1b4dd6bd250542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
