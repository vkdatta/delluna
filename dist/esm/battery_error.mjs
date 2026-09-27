export const name="battery_error";
export const id="dl_d606d08469026223307d";
export const url=new URL("../icons/battery_error.svg?v=b5fef38dc1788a8d562c897682d0d40215752fbb59182fc331ba80e5feda1d5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
