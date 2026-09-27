export const name="lucid_1-book-open-check";
export const id="dl_375228d19b804fab990b";
export const url=new URL("../icons/lucid_1-book-open-check.svg?v=1e5d4dc450e7cb8626b283385c34dae5d5c97be20e5a6eba1903580257e05940",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
