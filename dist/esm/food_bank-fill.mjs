export const name="food_bank-fill";
export const id="dl_437fbf33873a6af6fd28";
export const url=new URL("../icons/food_bank-fill.svg?v=a76e939660d510a03af6d1bd4ab7b770c190d5cb45424bb812e427d2c1b3e950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
