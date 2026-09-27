export const name="battery_charging_60_2-fill";
export const id="dl_0fa3e3025c9a4f8cfe79";
export const url=new URL("../icons/battery_charging_60_2-fill.svg?v=5a81d092697e6d86532fcc73e2a3791e7679bfb04764fcb1821b1aa41e8520f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
