export const name="list-plus-fill";
export const id="dl_83e0936255694ab9b1bd";
export const url=new URL("../icons/list-plus-fill.svg?v=0b24497413318f0683cfac021b7fd9d18513afa501f0e8a7119543112d8a24c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
