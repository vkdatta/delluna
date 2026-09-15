export const name="battery_charging_30_2-fill";
export const id="dl_eeedc47d801a449cb735";
export const url=new URL("../icons/B/battery_charging_30_2-fill.svg?v=f4f31d9c6a1c3c2e73a113477a71189662b864c4e8960572f9fdbd519afc193b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
