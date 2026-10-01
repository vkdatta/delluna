export const name="currency_ruble-fill";
export const id="dl_50e5775c73d4be7ed227";
export const url=new URL("../icons/currency_ruble-fill.svg?v=483c93c7d5fd540eabf4ff42d2fe4d6aae1502b396886ea2e2c4a513d30a55f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
