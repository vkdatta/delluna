export const name="battery_charging_20_2-fill";
export const id="dl_10a9301b718eefd3133a";
export const url=new URL("../icons/battery_charging_20_2-fill.svg?v=abde28e7fd82e55271c3922512bd03d89d47acc7aa061bcead23623cff5e959e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
