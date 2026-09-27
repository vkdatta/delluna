export const name="battery_charging_30-fill";
export const id="dl_f3dfa92e326ee3f35b3a";
export const url=new URL("../icons/battery_charging_30-fill.svg?v=b3b053314819ccebf54089926ddc0362ba2cff0db9b4fd8d25e8efc890bf1fb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
