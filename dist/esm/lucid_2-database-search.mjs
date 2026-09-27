export const name="lucid_2-database-search";
export const id="dl_a8aa72dd58f444949fe0";
export const url=new URL("../icons/lucid_2-database-search.svg?v=81c55a3eb848f12eafeeeb5cc469e87cd564150eedce2ff221e3805ae5314173",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
