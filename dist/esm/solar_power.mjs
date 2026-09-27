export const name="solar_power";
export const id="dl_5a66dbf054757ee3e111";
export const url=new URL("../icons/solar_power.svg?v=761b134f5c14315bd73f4f37f2f44e6d8eae8296ac2fa480791e4913dd278d9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
