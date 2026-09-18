export const name="local_gas_station-fill";
export const id="dl_758ccbf1543441d88e1d";
export const url=new URL("../icons/local_gas_station-fill.svg?v=e4671f1c9a7c572d8e99b106974bb86d41696fd1d3c02155dd7822db1a38af6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
