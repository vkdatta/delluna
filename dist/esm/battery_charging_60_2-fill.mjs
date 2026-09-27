export const name="battery_charging_60_2-fill";
export const id="dl_b848e41284d67c6c0f61";
export const url=new URL("../icons/battery_charging_60_2-fill.svg?v=119f365c8f1c70b33a4c7258cb187d379fe32eada80b7cee672ac2bc43e58996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
