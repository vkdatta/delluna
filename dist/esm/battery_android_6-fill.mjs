export const name="battery_android_6-fill";
export const id="dl_8e1ee689815543b2a5f0";
export const url=new URL("../icons/B/battery_android_6-fill.svg?v=d226273eb05dfdefada8314c1ff66ad13693fb73a558a82b06e8b8ba6676cea7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
