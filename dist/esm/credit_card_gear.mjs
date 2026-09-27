export const name="credit_card_gear";
export const id="dl_1701c2c4238eb9b6208e";
export const url=new URL("../icons/credit_card_gear.svg?v=affbcbd3c60d3828428a6e4baac7a00d84e44d8d8e5680455f4850acb863e0aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
