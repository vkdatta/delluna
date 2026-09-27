export const name="network_wifi_3_bar-fill";
export const id="dl_ac1156aca6abc7a877fc";
export const url=new URL("../icons/network_wifi_3_bar-fill.svg?v=3802fed28e97179929894c91ee2d685a89c39ff7495f14b8bd8f076b4d8d0460",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
