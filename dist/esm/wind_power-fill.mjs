export const name="wind_power-fill";
export const id="dl_b942a075db7db2df0bf5";
export const url=new URL("../icons/wind_power-fill.svg?v=675a19e30cfea5ca1ff6e9b9d8c7cd5a6c189e8aa2b9b4a64b5e1229ca9b017a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
