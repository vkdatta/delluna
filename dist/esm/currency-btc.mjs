export const name="currency-btc";
export const id="dl_b4dfd2979d85444ea5e0";
export const url=new URL("../icons/currency-btc.svg?v=a48a0528f42f63eedac405d1355a0ebb74bb3e574c9baf12fefc789bc99a00d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
