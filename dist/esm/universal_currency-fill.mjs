export const name="universal_currency-fill";
export const id="dl_1c7915d8c93b0e201388";
export const url=new URL("../icons/universal_currency-fill.svg?v=30dc153c578dacf27600449364238864ec85f1e57d4aa4f079e5de9566cceb82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
