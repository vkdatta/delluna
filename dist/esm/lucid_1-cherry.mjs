export const name="lucid_1-cherry";
export const id="dl_a0200f452ad14bf79276";
export const url=new URL("../icons/lucid_1-cherry.svg?v=e8ca064d6f091a5ae88e83add37424348646011a4ecc8fd49fdccd4c817b40fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
