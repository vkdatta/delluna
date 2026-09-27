export const name="pet_supplies-fill";
export const id="dl_cc68a3b7e61dff7bda87";
export const url=new URL("../icons/pet_supplies-fill.svg?v=9fa76ce5ad7a91c5ba96589604e92d4f2e776023381ec0d9680acbf3c4978295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
