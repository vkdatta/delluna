export const name="solar_power-fill";
export const id="dl_965a1247de2f3dccd92e";
export const url=new URL("../icons/solar_power-fill.svg?v=2bb437c70e51d536654f8b526ae0fb1d121fefde9edbd61f3b2e4a54e98a36c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
