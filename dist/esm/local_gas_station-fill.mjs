export const name="local_gas_station-fill";
export const id="dl_2cd86689bc50beeae5ef";
export const url=new URL("../icons/local_gas_station-fill.svg?v=8959a83b6ebc5aae199e3a4f232ce4daba41204e887f03911abdc57ab1b75bdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
