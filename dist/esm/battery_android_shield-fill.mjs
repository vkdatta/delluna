export const name="battery_android_shield-fill";
export const id="dl_e811b29bd7d043109b07";
export const url=new URL("../icons/battery_android_shield-fill.svg?v=9db3feb4e90e3e7aed8b42e8281f963ef17951ac062ed5e499a010283dc9b779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
