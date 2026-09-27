export const name="home_health";
export const id="dl_01b48c6aac77fbf730f4";
export const url=new URL("../icons/home_health.svg?v=fe40b15fa998aca12f3c5287d9424d9d1f5e872bd519d55f4b277a294bed99b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
