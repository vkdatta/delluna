export const name="battery_2_bar-fill";
export const id="dl_05d47e4fff7a697f2ac0";
export const url=new URL("../icons/battery_2_bar-fill.svg?v=20b003f62f5816af8ae1f7dd1b550c0c56cac836e97adbd8f7e197290f2e5f3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
