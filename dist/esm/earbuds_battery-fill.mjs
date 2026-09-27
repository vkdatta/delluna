export const name="earbuds_battery-fill";
export const id="dl_e6cbb08ce2f8d440f867";
export const url=new URL("../icons/earbuds_battery-fill.svg?v=8890eab6b150951ecc077b2474d8d89706c79665a91305392758d2656843cfdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
