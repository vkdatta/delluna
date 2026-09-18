export const name="battery_android_0-fill";
export const id="dl_e209470b11794f1e848e";
export const url=new URL("../icons/battery_android_0-fill.svg?v=c50e2b848a7ad741068e198ca0626c13b2a7d217473b8030c9285b4b6c2cad64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
