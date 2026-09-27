export const name="battery_charging_50";
export const id="dl_fe9b6451e86710648f65";
export const url=new URL("../icons/battery_charging_50.svg?v=a86bebc548af347bd0222f4a117332ef0ba95135968eb3d659cea8c21f5a67dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
